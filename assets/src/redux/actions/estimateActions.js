import axios from "axios";

export const LOAD_ESTIMATES = "LOAD_ESTIMATES";
export const LOAD_ESTIMATES_SUCCESS = "LOAD_ESTIMATES_SUCCESS";
export const LOAD_ESTIMATES_ERROR = "LOAD_ESTIMATES_ERROR";


/**
 * Passe le status en chargement pour les estimates
 * @returns {{type: string}}
 */
export const loadEstimates = () => {
    return {
        type: LOAD_ESTIMATES
    }
}

/**
 * Permet de retourner les estimates après le chargement
 * @param estimates
 * @returns {{payload, type: string}}
 */
export const loadEstimatesSuccess = (estimates) => {
    return {
        type: LOAD_ESTIMATES_SUCCESS,
        payload: estimates
    }
}

export const loadEstimatesError = (error) => {
    return {
        type: LOAD_ESTIMATES_ERROR,
        payload: error
    }
}

/**
 * Lance la récupérations des datas en bdd
 * @returns {(function(*): void)|*}
 * @constructor
 */
export const estimatesActivesApiCall = () => {
    return (dispatch) => {
        dispatch(loadEstimates());
        axios.get('/api/estimates/actives')
            .then((response) => {
                dispatch(loadEstimatesSuccess(response.data))
            })
            .catch((error) => {
                console.log(error.response)
                dispatch(loadEstimatesError(error.response.data.message))
            })
    }
}