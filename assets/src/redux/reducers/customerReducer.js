const INITIAL_STATE = {};

function customerReducer(state = INITIAL_STATE, action)
{
    switch (action.type){
        case 'FIND_NB_CUSTOMERS' : {
            return {
                ...state,
                nbCustomers : action.payload
            }
        }
        case 'FIND_ALL_CUSTOMERS' : {
            return {
                ...state,
                customers: action.payload
            }
        }
        default:
            return state
    }
}

export default customerReducer;