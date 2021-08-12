import React, {Fragment, useEffect, useState} from 'react';
import { connect} from "react-redux";
import {customersApiCall} from "../redux/actions/customerActions";
import LoaderComponent from "../components/LoaderComponent";


const CustomersPage = ({customersData, customers }) => {

    // Je récupère les datas
    useEffect( () => {
        customers();
    }, [customers])


    //Propriétés
    const [search, setSearch] = useState("");
    // Recherche
    const handleChange = (e) => {
        const value = e.target.value
        setSearch(value);
    }

    return (
        <Fragment>
            <div className="container-fluid ">
                <div className="container p-5 mt-5">
                    <div className="display-4 text-white ">Mes Clients</div>
                    <hr className="bg-light"/>
                    <input className="form-control mt-5" type="text" name="search" onChange={(e) => handleChange(e)}/>
                    <table className="table table-hover table-dark   mt-2">
                        <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Voir</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Supprimer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {  Object.values(customersData.customers).map((customer, index) =>
                            <tr key={index}>
                                <th scope="row">{customer.firstname} {customer.lastname}</th>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-info">
                                        <i className="fas fa-eye"> </i>
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-primary">
                                        <i className="fas fa-pen"> </i>
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="fas fa-trash"> </i>
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    { customersData.isLoading &&
                        <div className="text-center mt-5">
                            <LoaderComponent/>
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        customersData: state.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        customers: () => dispatch(customersApiCall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);
