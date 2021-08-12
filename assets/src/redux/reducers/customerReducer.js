const INITIAL_STATE = {
    customers: [],
    nbCustomers: 0,
    isLoading: true,
    error: ''
};

function customerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_CUSTOMERS' : {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'LOAD_CUSTOMERS_SUCCESS' : {
            return {
                ...state,
                isLoading: false,
                customers: action.payload,
                nbCustomers: action.payload.length,
                error: ''
            }
        }
        case 'LOAD_CUSTOMERS_ERROR' : {
            return {
                ...state,
                isLoading: false,
                customers: [],
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default customerReducer;