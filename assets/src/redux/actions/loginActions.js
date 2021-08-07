import axios from "axios";

export const LOGIN_CHECK = "LOGIN_CHECK";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";

/**
 * Permet de se connecter
 * @param credentials
 * @returns {(function(*): void)|*}
 */
export const loginCheck = (credentials) => {
     return  (dispatch) => {
        axios.post('/api/login_check', credentials)
            .then( (response) => {
                dispatch({
                    type: LOGIN_CHECK, payload: response.data
                })
                // Je stocke le token dans le navigateur
                localStorage.setItem("authToken", "Bearer " +response.data.token);
                // J'insère le token dans le headers de axios pour les prochaines requetes
                axios.defaults.headers["Authorization"] = "Bearer " +response.data.token;
            })
            .catch((error) => {
                dispatch({
                    type: LOGIN_ERROR, payload: error.response.data
                })
            })
    }
}

/**
 * Permet de se deconnecter
 * @returns {(function(*): void)|*}
 */
export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('authToken');
        delete axios.defaults.headers['Authorization'];
        dispatch({type: LOGOUT, payload: "Logout success"});
    }
}