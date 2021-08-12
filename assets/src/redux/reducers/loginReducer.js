const INITIAL_STATE = {
    isLoading: false,
    token : "",
    isLoggedIn: false
};

function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_CHECK' : {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'LOGIN_SUCCESS' : {
            return {
                ...state,
                isLoading: false,
                token: action.payload,
                isLoggedIn: true
            }
        }
        case 'LOGIN_ERROR' : {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        case 'LOGOUT' : {
            return {
                ...state,
                token: "",
                isLoading: false,
                isLoggedIn: false
            }
        }
        default:
            return state
    }
}

export default loginReducer;