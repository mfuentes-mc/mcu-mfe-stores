import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {StoresScreen} from '../pages/storesList/StoresScreen';
import {StoresEdit} from '../pages/storesEdit/StoresEdit';
import {StoresNew} from '../pages/storesNew/StoresNew';
import {Provider} from "react-redux";
import store from "../redux/store/store";

export const StoresRouters = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<StoresScreen/>}/>
                    <Route path="/stores" element={<StoresScreen/>}/>
                    <Route path="/stores/new" element={<StoresNew/>}/>
                    <Route path="/stores/edit/:id" element={<StoresEdit/>}/>
                </Routes> 
            </Provider>
        </BrowserRouter>
    )
}