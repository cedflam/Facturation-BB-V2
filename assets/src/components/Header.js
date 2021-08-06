import React, {Fragment} from 'react';
import logo from "../../public/img/bb-logo.jpg";
import {Link} from "react-router-dom";
const HeaderComponent = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Devis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Factures</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Archives</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item ">
                          <Link to="/">
                              <p className="nav-link btn btn-sm btn-primary px-5 mr-3">
                                  <i className="fas fa-home text-white"></i>
                              </p>
                          </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-sm btn-danger text-white" href="#" tabIndex="-1"
                               aria-disabled="true">Déconnexion</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default HeaderComponent;
