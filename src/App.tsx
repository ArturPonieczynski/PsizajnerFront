import React from 'react';
import './App.css';
import {Main} from "./components/layout/Main/Main";
import {Route, Routes} from "react-router-dom";
import {NotFoundView} from './views/NotFoundView';
import {Shop} from "./components/Shop/Shop";
import {LoginPage} from './components/Login/Login-page';
import {ContactForm} from "./components/ContactForm/ContactForm";
import {ThankYouForYourMessage} from "./views/ThankYouView";
import {ThankYouForYourRegistration} from "./views/ThankYouRegisterView";

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/psizajners" element={''}/>
            <Route path="/model" element={''}/>
            <Route path="/FAQ" element={''}/>
            <Route path="/shop/*" element={<Shop/>}/>
            <Route path="/user/login" element={<LoginPage/>}/>
            <Route path="/contact-form" element={<ContactForm/>}/>
            <Route path="/contact-form/ok" element={<ThankYouForYourMessage/>}/>
            <Route path="/user/login/ok" element={<ThankYouForYourRegistration/>}/>
            <Route path="*" element={<NotFoundView/>}/>
        </Routes>
    );
}
