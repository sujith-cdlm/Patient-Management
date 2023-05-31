import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddPatients = () => {

    const [patientDetails,setPatientDetails] = useState({   
        patientName:"",
        patientAddress:"",
        patientPhone:""
    })

    const dataOnChange=(event)=>{
        setPatientDetails(
           {
             ...patientDetails,[event.target.name]:event.target.value
           }
        )
    }

    const submitData=()=>{
        console.log(patientDetails)
        axios.post("http://localhost:8080/patientEntry",patientDetails).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Patient Successfully Added")
                setPatientDetails({   
                    patientName:"",
                    patientAddress:"",
                    patientPhone:""
                })
            } else {
                alert("Error")
            }
        })
    }



    return (
        <div><NavigationBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <br></br><h6>Add Patient Details</h6>
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Patient Name</label>
                        <input type="text" name='patientName' value={patientDetails.patientName} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" name='patientAddress' value={patientDetails.patientAddress} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input type="text" name='patientPhone' value={patientDetails.patientPhone} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <button className="btn btn-success" onClick={submitData} >SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPatients