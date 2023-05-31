import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const myNavigation = useNavigate()

    const [user,setUserData] = useState({
        userName: "", 
        password: ""
    })

    const dataOnChange=(event)=>{
        setUserData({
            ...user,[event.target.name]:event.target.value
        })
    }

    const submitLogin=()=>{
        console.log(user)
        if(user.userName=="admin" && user.password=="1234"){
            sessionStorage.setItem("name","Admin")
            myNavigation("/add")
        }else{
            alert("Login Failed")
        }
        
    }

    return (
        <div>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <h2><label htmlFor="" className="form-label">Patient Management</label></h2>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <h5><label htmlFor="" className="form-label">Login Here</label></h5>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">User Name</label>
                        <input type="text" name='userName' value={user.userName} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name='password' value={user.password} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={submitLogin} >SUBMIT</button>
                    </div>
                </div>
            </div></div>
    )
}

export default Login