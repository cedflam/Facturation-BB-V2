const INITIAL_STATE = {
    estimates: [],
    nbEstimates: 0,
    isLoading : true,
    error: ''
};

function estimateReducer(state = INITIAL_STATE, action)
{
    switch (action.type){
        case 'LOAD_ESTIMATES' : {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'LOAD_ESTIMATES_SUCCESS' : {
            return {
                ...state,
                estimates: action.payload,
                nbEstimates: action.payload.length,
                isLoading: false,
                error: ''
            }
        }
        case 'LOAD_ESTIMATES_ERROR' : {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default:
            return state
    }
}

export default estimateReducer;