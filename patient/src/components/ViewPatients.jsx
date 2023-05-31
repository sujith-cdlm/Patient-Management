import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewPatients = () => {

   const [patients,setPatients]=useState([])

   const viewAllData=()=>{

     axios.get("http://localhost:8080/view").then((response)=>{

        setPatients(response.data.data)
     
     })

   }

   React.useEffect(()=>{viewAllData()},[])

    return (
        <div>
            <NavigationBar/>
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            patients.map((value,index)=>{
                                
                                return <tr>
                                         <th scope="row">{index+1}</th>
                                         <td>{value.patientName}</td>
                                         <td>{value.patientAddress}</td>
                                         <td>{value.patientPhone}</td>
                                       </tr>
                            })
                           
                        }
                        

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewPatients