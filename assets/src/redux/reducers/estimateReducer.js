const INITIAL_STATE = {};

function estimateReducer(state = INITIAL_STATE, action)
{
    switch (action.type){
        case 'FIND_NB_ESTIMATES' : {
            return {
                ...state,
                nbEstimates : action.payload
            }
        }
        default:
            return state
    }
}

export default estimateReducer;