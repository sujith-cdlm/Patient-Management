import React from 'react'
import { GenIcon } from 'react-icons'
import { Link } from 'react-router-dom'

const NavigationBar = () => {

    const sessionName =  sessionStorage.getItem("name")

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Patient</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/add">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view">View</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div style={{ color: 'blue', alignItems:'center', alignContent:'center'}}> <h6>Welcome {sessionName}</h6></div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavigationBar