import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const SearchPatient = () => {

    const [phoneNo, setPhoneNumber] = useState(
        {
            patientPhone: ""
        }
    )


    const [searchResult, setSearchResult] = useState(
        {
            "id": "",
            "patientName": "",
            "patientAddress": "",
            "patientPhone": ""
        }
    )

    const dataOnChange = (event) => {

        setPhoneNumber(
            {
            ...phoneNo, [event.target.name]: event.target.value
            }
        )

        
    }

    const onUpdateData =(event)=>{

        setSearchResult(
            {
              ...searchResult,[event.target.name]: event.target.value
            }
        )
    }

    const searchPatient = () => {
        console.log(phoneNo)
        axios.post("http://localhost:8080/searchPatientData", phoneNo).then((response) => {

            if (response.data.status != "success") {

                alert("Invalid Phone Number")

                setSearchResult(
                    {
                        "id": '',
                        "patientName": "",
                        "patientAddress": "",
                        "patientPhone": ""
                    }
                )

            } else {

                console.log(response.data.data)

                setSearchResult(response.data.data)
            }

        })
    }

    const updatePatient = () =>{
        console.log(searchResult)
        axios.put("http://localhost:8080/updatePatient",searchResult).then((response)=>{

           if (response.data.status=="success") {
               alert("Updated Successfully")
           } else {
               alert("Failed")
           }
        })

    }

    const deletePatient=()=>{
        console.log(searchResult)
        axios.post("http://localhost:8080/deletePatient",searchResult).then((response)=>{

            if (response.data.status=="success") {
                alert("Patient Deleted Successfully")
            } else {
                alert("Failed")
            }
        })

    }


    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <br></br>
                        <label htmlFor="" className="form-label">Phone Number.</label>
                        <input type="text" name='patientPhone' value={phoneNo.patientPhone} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <button className="btn btn-success" onClick={searchPatient} >SEARCH</button>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <input type="hidden" name='id' defaultValue={searchResult.id}  onChange={onUpdateData} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Patient Name</label>
                        <input type="text" name='patientName' defaultValue={searchResult.patientName}  onChange={onUpdateData} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" name='patientAddress'  defaultValue={searchResult.patientAddress}  onChange={onUpdateData} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input type="text" name='patientPhone' defaultValue={searchResult.patientPhone} onChange={onUpdateData}  className="form-control" />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <button className="btn btn-success" onClick={updatePatient}>UPDATE</button>&nbsp;
                        <button className="btn btn-danger" onClick={deletePatient}>DELETE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchPatient