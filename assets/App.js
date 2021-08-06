import './public/styles/App.css';
import React, {Fragment} from "react";
import ReactDom from "react-dom";
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./src/redux/store";
// Composants
import Header from "./src/components/Header";
import HomePage from "./src/pages/HomePage";
import NoMatchComponent from "./src/components/NoMatchComponent";

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <BrowserRouter>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route exact path="/"  component={HomePage} />
                            <Route path="/"  component={NoMatchComponent} />
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
