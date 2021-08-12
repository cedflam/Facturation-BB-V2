import React, {Fragment, useEffect, useState} from 'react';
import {connect} from "react-redux";
import logo from '../../public/img/bb-logo.jpg';

import {useDispatch} from "react-redux";
import {loginApiCall} from "../redux/actions/loginActions";
import LoaderComponent from "../components/LoaderComponent";

const LoginPage = ({history, onLogin, loginData}) => {
    // Propriétés
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    // enregistre la saisie du formulaire
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setCredentials({...credentials, [name]: value});
    }

    // Soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginApiCall(credentials));
        onLogin(true);
        history.push("/");
    }
    console.log(onLogin)

    return (
        <Fragment>

            <div className="container-fluid bg">
                <div className="container  mt-5">
                    {loginData.isLoading ?
                        <div className="text-white text-center mt-5 p-5">
                            <LoaderComponent/>
                        </div>
                        :
                        <div className="col-md-6 mt-3 mx-auto">
                            <div className="card bg-secondary text-white card-login" id="">
                                <div className="card-header text-center">
                                    <img src={logo} alt=""/>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="username"> Email </label>
                                            <input type="email"
                                                   className={"form-control " + (loginData.error && " is-invalid")}
                                                   name="username" value={credentials.username}
                                                   onChange={handleChange}/>
                                            {loginData.error && <p className="invalid-feedback">
                                                L'email ou le mot de passe est invalide...
                                            </p>}
                                            <label htmlFor="password"> Mot de passe </label>
                                            <input type="password" className="form-control" name="password"
                                                   value={credentials.password} onChange={handleChange}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block ">
                                            Connexion
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>


        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        loginData: state.login
    }
}
export default connect(mapStateToProps)(LoginPage);
