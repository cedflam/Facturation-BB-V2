import '../../public/styles/App.css';
import '../../bootstrap';

import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import BoxComponent from "../components/BoxComponent";
import {findNbCustomers} from "../redux/actions/customerActions";
import {findNbEstimates} from "../redux/actions/estimateActions";
import {findNbTotalInvoices, findTotalAmountFinalInvoices, findTotalAdvances, findTotalInvoicesFinalized} from "../redux/actions/invoiceActions";


const HomePage = () => {
    //redux
    const dispatch = useDispatch();
    const {nbCustomers} = useSelector( (state) => state.customerReducer);
    const {nbEstimates} = useSelector( (state) => state.estimateReducer);
    const {
        nbTotalInvoices,
        crdFinalInvoices,
        totalAdvances,
        totalInvoicesFinalized

    } = useSelector( (state) => state.invoiceReducer);

    // Je récupère les datas depuis le store
    useEffect(() => {
        dispatch(findNbCustomers());
        dispatch( findNbEstimates());
        dispatch(findNbTotalInvoices())
        dispatch(findTotalAmountFinalInvoices());
        dispatch(findTotalAdvances());
        dispatch(findTotalInvoicesFinalized());
    }, []);

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
                   <BoxComponent title={"Total accomptes versés"} number={totalAdvances} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"info"}/>
                   <BoxComponent title={"Total factures finalisées"} number={totalInvoicesFinalized} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"secondary"}/>
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

export default HomePage;

