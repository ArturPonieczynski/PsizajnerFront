import React from 'react';
import './App.css';
import {Main} from "./components/layout/Main/Main";
import {Route, Router, Routes} from "react-router-dom";
import {NotFoundView} from './views/NotFoundView';
import {Shop} from "./components/Shop/Shop";
import {LoginPage} from './components/Login/Login-page';
import {Header} from "./components/layout/Header/Header";
import { ShopBuy } from './components/ShopBuy/ShopBuy';

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/psizajners" element={''}/>
            <Route path="/model" element={''}/>
            <Route path="/FAQ" element={''}/>
            <Route path="/shop/*" element={<Shop/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            {/*<Route path="*" element={<NotFoundView/>}/>*/}
            {/*<Route path="/shop/ready-to-buy" element={<ShopBuy/>}/>*/}
        </Routes>
    );
}
