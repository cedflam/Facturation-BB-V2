import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector, connect} from "react-redux";
import {findAllCustomers} from "../redux/actions/customerActions";
import {isEmpty} from "../service/AppService";


const CustomersPage = () => {

    // redux
    const dispatch = useDispatch();
    const customers = useSelector( (state) => state.customerReducer);
    //Propriétés
    const [search, setSearch] = useState("");
    // Je récupère les customers
    useEffect(() => {
        dispatch(findAllCustomers());
    }, []);
    // Recherche
    const handleChange = (e) => {
        const value = e.target.value
        setSearch(value);
    }
    //const filteredCustomers = customers.filter(c => c.firstname.include(search))

    return (
        <Fragment>
            <div className="container-fluid ">
                <div className="container p-5 mt-5">
                    <div className="display-4 text-white ">Mes Clients </div>
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
                        { !isEmpty(Object.values(customers)) &&  Object.values(customers)[0].map((customer, index) =>
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
                </div>
            </div>
        </Fragment>
    );
};

export default CustomersPage;
