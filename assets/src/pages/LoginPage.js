import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import logo from '../../public/img/bb-logo.jpg';
import bg from '../../public/img/bg-masthead.jpg';

import {loginCheck} from "../redux/actions/loginActions";

const LoginPage = ({onLogin, history}) => {

    // Propriétés
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();
    const login = useSelector((state) => state.loginReducer);

    // Données saisies dans le formulaire
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setCredentials({...credentials, [name]: value});
    }
    // Soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginCheck(credentials));
        onLogin(true);
        history.push("/");
    }

    return (
        <Fragment>
            <div className="container-fluid bg">
                <div className="container p-5 ">
                    <div className="col-md-6 mt-5 mx-auto" >
                        <div className="card bg-warning card-login" id="divShadow">
                            <div className="card-header text-center">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username"> Email </label>
                                        <input type="email" className={"form-control " + (login.error && " is-invalid" )} name="username" value={credentials.username} onChange={handleChange}/>
                                        {login.error && <p className="invalid-feedback">
                                            L'email ou le mot de passe est invalide...
                                        </p>}
                                        <label htmlFor="password"> Mot de passe </label>
                                        <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block ">
                                        Connexion
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginPage;
