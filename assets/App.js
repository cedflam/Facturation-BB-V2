import './public/styles/App.css';
import React, {Fragment, useState} from "react";
import ReactDom from "react-dom";
import {BrowserRouter, BrowserRouter as Router, Route, Switch, withRouter, Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./src/redux/store";
//services
import {axiosSetupService, isAuthenticatedService} from "./src/service/AppService";
// Composants
import Header from "./src/components/Header";
import LoginPage from "./src/pages/LoginPage";
import HomePage from "./src/pages/HomePage";
import NoMatchComponent from "./src/components/NoMatchComponent";
import CustomersPage from "./src/pages/CustomersPage";
import PrivateRoute from "./src/components/PrivateRoute";


axiosSetupService()

function App() {

    //Propriétés
    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedService());
    // inclure le header dans la redirection
    const HeaderWithRouter = withRouter(Header);

    return (
        <Fragment>
            <Provider store={store}>
                <BrowserRouter>
                    <Router>
                        <HeaderWithRouter isAuthenticated={isAuthenticated} onLogout={setIsAuthenticated}/>
                        <Switch>
                            <Route exact path="/login" render={ (props) => <LoginPage onLogin={setIsAuthenticated} {...props}/> }/>
                            <PrivateRoute exact path={"/"} component={HomePage} isAuthenticated={isAuthenticated} />
                            <PrivateRoute exact path={"/customers"} component={CustomersPage} isAuthenticated={isAuthenticated} />
                            <Route path={"/"} component={NoMatchComponent} />
                        </Switch>
                    </Router>
                </BrowserRouter>
            </Provider>
        </Fragment>
    );
}

// Je récupère la div du template Home
const rootElement = document.querySelector("#app");
// Je rend la page
ReactDom.render(<Router> <App/> </Router>, rootElement);
