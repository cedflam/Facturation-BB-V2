import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import customerReducer from "./reducers/customerReducer";
import estimateReducer from "./reducers/estimateReducer";
import invoiceReducer from "./reducers/invoiceReducer";

const rootReducer = combineReducers({
    customerReducer,
    estimateReducer,
    invoiceReducer

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

