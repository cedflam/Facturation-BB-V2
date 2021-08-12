import '../../public/styles/App.css';
import '../../bootstrap';

import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector, connect} from "react-redux";

import BoxComponent from "../components/BoxComponent";
import {customersApiCall} from "../redux/actions/customerActions";
import {estimatesActivesApiCall} from "../redux/actions/estimateActions";
import {
    findNbTotalInvoices,
    findTotalAmountFinalInvoices,
    findTotalAdvances,
    findTotalInvoicesFinalized,
    findCaProvisional
} from "../redux/actions/invoiceActions";
import LoaderComponent from "../components/LoaderComponent";
import {Redirect} from "react-router-dom";


const HomePage = ({isAuthenticated}) => {

    const customersData = useSelector((state) => state.customers);
    const estimatesActivesData = useSelector( (state) => state.estimates);
    const dispatch = useDispatch()

    console.log(isAuthenticated)
    useEffect( async() => {
       await dispatch(customersApiCall())
        await dispatch(estimatesActivesApiCall())
    }, [])

    return (
        <Fragment>
            {
            <div className="container-fluid ">
                <div className="container p-5 mt-5">
                    <div className="display-4 text-uppercase text-white mt-3 title-shadow" >Tableau de bord</div>
                    <hr className="mb-3 bg-white"/>
                    <div className="row">
                        <BoxComponent title={"Nombre de clients"} number={customersData.nbCustomers} isLoading={customersData.isLoading} link={"Voir mes clients"} logo={<i className="fas fa-users"> </i>} color={"primary"}/>
                        <BoxComponent title={"Nombre de devis actifs"} number={estimatesActivesData.nbEstimates} isLoading={estimatesActivesData.isLoading} link={"Voir mes devis"} logo={<i className="fas fa-file-alt"> </i>} color={"danger"}/>
                        <BoxComponent title={"Nombre de factures en cours"} number={0} link={"Voir mes factures"} logo={<i className="fas fa-file-invoice"> </i>} color={"warning"}/>
                        <BoxComponent title={"Restant dû factures finales"} number={0} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"warning"}/>
                        <BoxComponent title={"Total accomptes versés"} number={0} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"info"}/>
                        <BoxComponent title={"Total factures finalisées"} number={0} link={"Voir mes factures"} logo={<i className="fas fa-euro-sign"> </i>} color={"secondary"}/>
                    </div>
                    <div className="card border-0  mt-3" id="">
                        <div className={`card-body  text-white rounded-top bg-dark`} >
                            <div className="row">
                                <div className="ml-3">
                                    <h1 className="font-weight-bold">
                                        {0}
                                    </h1>
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
            </div>

            }
        </Fragment>
    );
};


const mapStateToProps = (state) => {
    return {
        customersData: state.customers,
        estimatesActivesData: state.estimates

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        customers: () => dispatch(customersApiCall()),
        estimatesActives: () => dispatch(estimatesActivesApiCall()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (HomePage);