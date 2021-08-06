import axios from "axios";

export const FIND_NB_CUSTOMERS = "FIND_NB_CUSTOMERS";

/**
 * Permet de récupérer le nombre de clients
 * @returns {(function(*): void)|*}
 */
export const findNbCustomers = () => {
    return (dispatch) => {
        axios.get('/customers/findNbCustomers')
            .then((response) => {
                dispatch({
                    type: FIND_NB_CUSTOMERS, payload: response.data
                })
            })
            .catch((error) => console.log(error.response))
    }
}