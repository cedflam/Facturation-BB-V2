import axios from "axios";

export const LOAD_CUSTOMERS = "LOAD_CUSTOMERS";
export const LOAD_CUSTOMERS_SUCCESS = "LOAD_CUSTOMERS_SUCCESS";
export const LOAD_CUSTOMERS_ERROR = "LOAD_CUSTOMERS_ERROR";



/**
 * Passe le status en chargement pour les customers
 * @returns {{type: string}}
 */
export const loadCustomers = () => {
    return {
        type: LOAD_CUSTOMERS
    }
}

/**
 * Permet de retourner les customers après le chargement
 * @param customers
 * @returns {{payload, type: string}}
 */
export const loadCustomersSuccess = (customers) => {
    return  {
        type: LOAD_CUSTOMERS_SUCCESS,
        payload: customers
    }
}

/**
 * Retourne si la requete échoue
 * @param error
 * @returns {{payload, type: string}}
 */
export const loadCustomersError = (error) => {
    return {
        type: LOAD_CUSTOMERS_ERROR,
        payload: error
    }
}

/**
 * Lance la récupération des customers en bdd
 * @returns {(function(*): void)|*}
 */
export const customersApiCall = () => {
    return (dispatch) => {
        // Je lance loadCustomer pour ttendre les datas
        dispatch(loadCustomers());
        axios.get('/api/customers')
            .then((response) => {
                // Si j'ai une réponse positive
                dispatch(loadCustomersSuccess(response.data))
            })
            //Sinon
            .catch((error) => dispatch(loadCustomersError(error.response.data.message)))
    }
}