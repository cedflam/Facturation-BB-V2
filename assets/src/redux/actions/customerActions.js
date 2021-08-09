import axios from "axios";

export const FIND_NB_CUSTOMERS = "FIND_NB_CUSTOMERS";
export const FIND_ALL_CUSTOMERS = "FIND_ALL_CUSTOMERS";

/**
 * Permet de récupérer le nombre de clients
 * @returns {(function(*): void)|*}
 */
export const findNbCustomers = () => {
    return (dispatch) => {
        axios.get('/api/customers/findNbCustomers')
             .then((response) => {
               dispatch({
                    type: FIND_NB_CUSTOMERS, payload: response.data
                })
             })
             .catch((error) => console.log(error.response))
    }
}

/**
 * Permet de récupérer tous les customers
 * @returns {(function(*): void)|*}
 */
export const findAllCustomers = () => {
    return (dispatch) => {
        axios.get('/api/customers')
            .then((response) => {
                dispatch({
                    type: FIND_ALL_CUSTOMERS, payload: response.data
                })
            })
            .catch((error) => console.log(error.response))
    }
}