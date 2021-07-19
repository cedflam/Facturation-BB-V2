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
    const [nbTotalInvoices, setNbTotalInvoices] = useState();
    const [crdFinalInvoices, setCrdFinalInvoices] = useState();
    const [totalAdvance, setTotalAdvances] = useState();
    const [totalInvoices, setTotalInvoices] = useState();


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

    // Je récupère le nombre de factures en cours
    useEffect(() => {
        axios.get('/invoices/nbTotalInvoices')
            .then((response) => response.data)
            .then((data) => setNbTotalInvoices(data))
            .catch((error) => console.log(error.response))
    }, []);

    // Je récupère le montant total restant du des factures finales
    useEffect(() => {
        axios.get('/invoices/findTotalAmountFinalInvoices')
            .then((response) => response.data)
            .then((data) => setCrdFinalInvoices(data))
            .catch((error) => console.log(error.response))
    }, []);

    // Je récupère le total des acomptes versés
    useEffect(() => {
        axios.get('/invoices/findTotalAdvances')
            .then((response) => response.data)
            .then((data) => setTotalAdvances(data))
            .catch((error) => console.log(error.response))
    }, []);

    // Je récupère le total des factures finalisées
    useEffect(() => {
        axios.get('/invoices/findTotalInvoicesFinalized')
            .then((response) => response.data)
            .then((data) => setTotalInvoices(data))
            .catch((error) => console.log(error.response))
    }, []);

console.log(nbEstimates)

    return (
        <Fragment>
           <div className="container">
               <div className="display-4 text-uppercase text-white mt-3">Tableau de bord</div>
               <hr className="mb-3 bg-white"/>
               <div className="row">
                   <BoxComponent title={"Nombre de clients"} number={nbCustomers} link={"Voir mes clients"} logo={<i className="fas fa-users"> </i>} color={"primary"}/>
                   <BoxComponent title={"Nombre de devis actifs"} number={nbEstimates} link={"Voir mes devis"} logo={<i className="fas fa-file-alt"> </i>} color={"danger"}/>
                   <BoxComponent title={"Nombre de factures en cours"} number={nbTotalInvoices} link={"Voir mes factures"} logo={<i className="fas fa-file-invoice"> </i>} color={"warning"}/>
                   <BoxComponent title={"Restant dû factures finales"} number={crdFinalInvoices} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"warning"}/>
                   <BoxComponent title={"Total accomptes versés"} number={totalAdvance} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"info"}/>
                   <BoxComponent title={"Total factures finalisées"} number={totalInvoices} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"secondary"}/>
               </div>
               <div className="card border-0  mt-3" id="divShadow">
                   <div className={`card-body  text-white rounded-top bg-dark`} >
                       <div className="row">
                           <div className="ml-3">
                               <h1 className="font-weight-bold"> </h1>
                               <p>Chiffre d'affaire de l'année en cours</p>
                           </div>
                           <h1 className=" display-4 ml-auto mr-3">
                               <i className="fas fa-euro-sign"> </i>
                           </h1>
                       </div>
                   </div>
                   <div className={`card-footer bg-primary rounded-bottom bg-dark`} >
                       <a href="" className="text-white text-center">

                           <i className="fas fa-arrow-circle-right ml-2"> </i>
                       </a>
                   </div>
               </div>
           </div>
        </Fragment>
    );
};

// Je récupère la div du template Home
const rootElement = document.querySelector("#HomePage");
// Je rend la page
ReactDom.render(<HomePage/>, rootElement);

