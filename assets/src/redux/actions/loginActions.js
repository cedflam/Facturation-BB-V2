import axios from "axios";
import jwtDecode from "jwt-decode";

export const LOGIN_CHECK = "LOGIN_CHECK";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

/**
 * Lance la procédure de connexion
 * @returns {(function(*): void)|*}
 */
export const loginCheck = () => {
     return {
         type: LOGIN_CHECK
     }
}

/**
 * Permet de re tourner le token en cs de success
 * @param token
 * @returns {{payload, type: string}}
 */
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

/**
 * Permet de retourner une erreur en cas d'echec
 * @param error
 * @returns {{payload, type: string}}
 */
export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
}

/**
 * Permet de se connecter
 * @param credentials
 * @returns {(function(*): void)|*}
 */
export const loginApiCall = (credentials) => {

    return  (dispatch) => {
        // Je lance la procédure de login
        dispatch(loginCheck())
        // Requêtes axios
        axios.post('/api/login_check', credentials)
            .then( (response) => {
                dispatch(loginSuccess(response.data.token))
                // Je stocke le token dans le navigateur
                localStorage.setItem("authToken", "Bearer " + response.data.token);
                // J'insère le token dans le headers de axios pour les prochaines requetes
                axios.defaults.headers["Authorization"] = "Bearer " + response.data.token;
            })
            .catch((error) => {
                dispatch(loginError(error.response.data.message))
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
        dispatch({type: LOGOUT});
    }
}
