import React from "react";
import NavigationCSS from "../navbar/Navigation.module.scss";
import SignInCss from './SignIn.module.scss';
import {NavLink} from "react-router-dom";

export const SignIn = () => {
    return (
        <div className={NavigationCSS.link}>
            <NavLink className={SignInCss.sign}  to="/gift">
                Login / Sign in
            </NavLink>
        </div>
    );
}