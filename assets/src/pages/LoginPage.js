import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import logo from '../../public/img/bb-logo.jpg';

import {loginCheck} from "../redux/actions/loginActions";

const LoginPage = ({onLogin, history}) => {

    // Propriétés
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const login = useSelector((state) => state.loginReducer);
    // Données saisies dans le formulaire
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setCredentials({...credentials, [name]: value});
    }
    // Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginCheck(credentials));
        setTimeout( () => {
            onLogin(true);
            history.push('/');
        }, 1000)
        setLoading(true);
    }

    return (
        <Fragment>
            { loading ?
                <div className="text-white text-center mt-5 p-5">
                    Chargement ...
                </div>
                :
            <div className="container-fluid bg">
                <div className="container p-5 ">
                    <div className="col-md-6 mt-5 mx-auto" >
                        <div className="card bg-secondary text-white card-login" id="divShadow">
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

            }
        </Fragment>
    );
};

export default LoginPage;
