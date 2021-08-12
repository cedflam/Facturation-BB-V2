import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import customerReducer from "./reducers/customerReducer";
import estimateReducer from "./reducers/estimateReducer";
import invoiceReducer from "./reducers/invoiceReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
    customers: customerReducer,
    estimates: estimateReducer,
    invoices: invoiceReducer,
    login: loginReducer

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

