import React, {Fragment, useEffect, useState} from 'react';
import logo from "../../public/img/bb-logo.jpg";
import {Link} from "react-router-dom";

import {connect, useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/loginActions";

const HeaderComponent = ({onLogout, history, isAuthenticated}) => {

    // Propriétés
    const dispatch = useDispatch();
    // Fonction de déconnexion
    const handleLogout = async () => {
        await dispatch(logout());
        onLogout(false);
        history.push("/login");
    }

    return (
        <Fragment>
            { isAuthenticated &&
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/customers" >Clients</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Devis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Factures</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link " href="#">Archives</a>
                        </li>
                        <li className="nav-item ">
                            <Link to="/">
                                <p className="nav-link btn btn-sm btn-warning text-white px-5 mr-3">
                                    <i className="fas fa-home text-white"></i>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-sm btn-danger text-white" tabIndex="-1"
                                    aria-disabled="true" onClick={handleLogout}>Déconnexion
                            </button>
                        </li>

                    </ul>

                </div>
            </nav>
            }
        </Fragment>
    );
};
const mapStateToProps = (state) => {
    return {
        loginData: state.login
    }
}
export default connect(mapStateToProps)(HeaderComponent);
