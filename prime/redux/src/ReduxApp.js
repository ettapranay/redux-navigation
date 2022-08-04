// Adding the provider and store 
import React from "react";
import ProductList from "./ProductList";
import rootReducer from "./reducers";

import { Provider } from 'react-redux';
import { createStore } from "redux";

const store = createStore(rootReducer); // adding reduer inside store

export default class ReduxApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ProductList />
            </Provider>
        )
    }
}