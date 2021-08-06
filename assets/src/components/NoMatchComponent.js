import React from 'react';
import {Link} from "react-router-dom";

const NoMatchComponent = () => {
    return (
        <div className="container mt-5 text-white text-center">
            <div className="display-4">
                Erreur-404
            </div>
            <Link to="/">
                <p className="btn btn-primary mt-3">Retour à l'accueil</p>
            </Link>
        </div>
    );
};

export default NoMatchComponent;
