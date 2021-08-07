import jwtDecode from "jwt-decode";
import axios from "axios";


/**
 * Permet de vérifier la validité du token dans le local storage
 * et de configurer le headers axios avec le token pour l'ensemble des requetes
 * à venir
 */
export function axiosSetupService (){
    // Je récupère le token dans le local storage
    const token = localStorage.getItem('authToken');
    // Je controle sa validité avec le package jwt-decode
    if (token){
        // destructuring
        const {exp : expiration} = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()){
            axios.defaults.headers["Authorization"] = token;
        }
    }
}

/**
 * Retourne vrai ou faux pour mettre à jour le state
 * @returns {boolean}
 */
export function isAuthenticatedService(){
    // Je récupère le token dans le local storage
    const token = localStorage.getItem('authToken');
    // Je controle sa validité avec le package jwt-decode
    if (token){
        // destructuring
        const {exp : expiration} = jwtDecode(token);
        return expiration * 1000 > new Date().getTime();
    }
    return false;
}

