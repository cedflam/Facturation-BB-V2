import axios from "axios";

export const FIND_NB_ESTIMATES = "FIND_NB_ESTIMATES";

/**
 * Permet de récupérer le nombre de devis en cours
 * @returns {(function(*): void)|*}
 */
export const findNbEstimates = () => {
    return (dispatch) => {
        axios.get('/estimates/findNbEstimates')
            .then((response) => {
                dispatch({
                    type: FIND_NB_ESTIMATES, payload: response.data
                })
            })
            .catch((error) => console.log(error.response))
    }
}