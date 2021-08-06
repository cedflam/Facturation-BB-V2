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
                crdFinalInvoices : action.payload
            }
        }
        case 'FIND_TOTAL_ADVANCES': {
            return {
                ...state,
                totalAdvances: action.payload
            }
        }
        case 'FIND_FINALIZED_INVOICES': {
            return {
                ...state,
                totalInvoicesFinalized: action.payload
            }
        }
        default:
            return state
    }
}

export default invoiceReducer;