import axios from "axios";

export const FIND_NB_INVOICES = "FIND_NB_INVOICES";
export const FIND_TOTAL_AMOUNT_FINAL_INVOICES = "FIND_TOTAL_AMOUNT_FINAL_INVOICES";
export const FIND_TOTAL_ADVANCES = "FIND_TOTAL_ADVANCES";
export const FIND_FINALIZED_INVOICES = "FIND_FINALIZED_INVOICES";

/**
 * Permet de récupérer le nombre de factures en cours
 * @returns {(function(*): void)|*}
 */
export const findNbTotalInvoices = () => {
    return (dispatch) => {
        axios.get('/invoices/nbTotalInvoices')
            .then((response) => {
                dispatch({
                    type: FIND_NB_INVOICES, payload: response.data
                })
            })
            .catch((error) => console.log(error.response))
    }
}

/**
 * Permet de récupérer le montant restant du des factures en cours
 * @returns {(function(*): void)|*}
 */
export const findTotalAmountFinalInvoices = () => {
    return (dispatch) => {
        axios.get('/invoices/findTotalAmountFinalInvoices')
            .then((response) => {
                dispatch({
                    type: FIND_TOTAL_AMOUNT_FINAL_INVOICES, payload: response.data
                })
            })
            .catch((error) => console.log(error.response))
    }
}

/**
 * Permet de récupérer le montant total des acomptes versés
 * @returns {(function(*): void)|*}
 */
export const findTotalAdvances = () => {
    return (dispatch) => {
        axios.get('/invoices/findTotalAdvances')
            .then((response) => {
                dispatch({
                    type: FIND_TOTAL_ADVANCES, payload: response.data
                })
            })
            .catch((error) => console.log(error.response))
    }
}

/**
 * Permet de récupérer le montant total des factures encaissées
 * @returns {(function(*): void)|*}
 */
export const findTotalInvoicesFinalized = () => {
    return (dispatch) => {
        axios.get('/invoices/findTotalInvoicesFinalized')
            .then((response) => {
                dispatch({
                    type: FIND_FINALIZED_INVOICES, payload: response.data
                })
            })
            .catch((error) => console.log(error.response))
    }
}

