import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import Login from '../Components/Login.jsx';
import Register from '../Components/Register.jsx';


export default function Navbar(props) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(!showLoginForm);
        setShowRegisterForm(false);
    };

    const handleRegisterClick = () => {
        setShowLoginForm(false);
        setShowRegisterForm(!showRegisterForm);
    };

    const closeLoginForm = () => {
        setShowLoginForm(false);
    };

    const closeRegisterForm = () => {
        setShowRegisterForm(false);
    };
    
    return (
        <div>
            <nav className="m-0 p-0">
                <ul className="d-flex flex-row list-unstyled align-items-center justify-content-center">
                    <li className="logo-nav">
                        <img className="" src={require(`../images/icons/${props.image}`)} alt="Logo-icon"/>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li1}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li2}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li3}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li4}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li5}</a>
                    </li>
                    <li className="sign-up">
                        <div className="btn-group mt-4 mb-4" role="group">
                        <div className="btn-group mt-4 mb-4" role="group">
                            <button onClick={handleLoginClick} id="btn-login" className="btn btn-lg rounded-3">{props.a1}</button>
                            <button onClick={handleRegisterClick} id="btn-signup" className="btn btn-lg rounded-3 ms-1">{props.a2}</button>
                        </div>
                        </div>
                    </li>
                </ul>
            </nav>
            {showLoginForm && (
                <div className="form-floating" style={{ position: 'absolute', top: '90px', left: '980px', right: '150px', margin: '20px', zIndex: '1000'}}>
                    <Login closeLoginForm={closeLoginForm} />
                </div>
            )}
            {showRegisterForm && (
                <div className="form-floating" style={{ position: 'absolute', top: '90px', left: 'auto', right: '0', margin: 'auto', zIndex: '1000' }}>
                    <Register closeRegisterForm={closeRegisterForm} />
                </div>
            )}
        </div>
    )
}