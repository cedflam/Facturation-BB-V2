const INITIAL_STATE = {};

function invoiceReducer(state = INITIAL_STATE, action)
{
    switch (action.type){
        case 'FIND_NB_INVOICES' : {
            return {
                ...state,
                nbTotalInvoices : action.payload
            }
        }
        case 'FIND_TOTAL_AMOUNT_FINAL_INVOICES': {
            return {
                ...state,
                crdFinalInvoices : action.payload.toFixed(2)
            }
        }
        case 'FIND_TOTAL_ADVANCES': {
            return {
                ...state,
                totalAdvances: action.payload.toFixed(2)
            }
        }
        case 'FIND_FINALIZED_INVOICES': {
            return {
                ...state,
                totalInvoicesFinalized: action.payload.toFixed(2)
            }
        }
        case 'FIND_CA_PROVISIONAL' : {
            return {
                ...state,
                totalCaProvisional: action.payload.toFixed(2)
            }
        }
        default:
            return state
    }
}

export default invoiceReducer;