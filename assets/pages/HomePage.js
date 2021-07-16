import '../styles/app.css';
import '../bootstrap';

import ReactDom from "react-dom";
import axios from "axios";
import React, {Fragment, useEffect, useState} from 'react';

import BoxComponent from "../components/BoxComponent";

const HomePage = () => {

    // Propriétés
    const [nbCustomers, setNbCustomers] = useState();
    const [nbEstimates, setNbEstimates] = useState();

    // Je récupère le total de customers en bdd
    useEffect(() => {
        axios.get('/customers/findNbCustomers')
            .then((response) => response.data)
            .then((data) => setNbCustomers(data))
            .catch((error) => console.log(error.response))
    }, []);

    // Je récupère le total de devis actif en bdd
    useEffect(() => {
        axios.get('/estimates/findNbEstimates')
            .then((response) => response.data)
            .then((data) => setNbEstimates(data))
            .catch((error) => console.log(error.response))
    }, []);



    return (
        <Fragment>
           <div className="container">
               <div className="display-4 text-uppercase text-white mt-3">Tableau de bord</div>
               <hr className="mb-3 bg-white"/>
               <div className="row">
                   <BoxComponent title={"Nombre de clients"} number={nbCustomers} link={"Voir mes clients"} logo={<i className="fas fa-users"> </i>} color={"primary"}/>
                   <BoxComponent title={"Nombre de devis actifs"} number={nbEstimates} link={"Voir mes devis"} logo={<i className="fas fa-file-alt"> </i>} color={"danger"}/>
                   <BoxComponent title={"Chiffre d'affaire"} number={145899.56} link={"Détails C.A"} logo={<i className="fas fa-euro-sign"> </i>} color={"warning"}/>
               </div>
           </div>
        </Fragment>
    );
};

// Je récupère la div du template Home
const rootElement = document.querySelector("#HomePage");
// Je rend la page
ReactDom.render(<HomePage/>, rootElement);

