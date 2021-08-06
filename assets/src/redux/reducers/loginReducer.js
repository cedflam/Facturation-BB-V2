const INITIAL_STATE = {};

function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_CHECK' : {
            return {
                ...state,
                token: action.payload.token
            }
        }
        case 'LOGOUT' : {
            return {
                ...state,
                logout: action.payload
            }
        }
        case 'LOGIN_ERROR' : {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default loginReducer;