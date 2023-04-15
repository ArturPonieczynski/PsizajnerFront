import React, {useEffect} from "react";
import {ShopHeader} from "../components/Shop/ShopHeader/ShopHeader";
import {useNavigate} from "react-router-dom";

export const ThankYouForYourRegistration = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 3000);
    }, []);

    return <>
        <ShopHeader/>
        <h1>Thank you for your registration.</h1>
        <p>You will be moved to the main page in 3 seconds.</p>
    </>
};