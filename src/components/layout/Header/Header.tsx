import React from "react";
import HeaderSCSS from './Header.module.scss';
import logo from '../../../images/logo.png';
import {BasicBreadcrumbs} from "../../navbar/Navigation";
import { SignIn } from "../../SignIn/SignIn";

export const Header = () => {

    return (
        <header className={HeaderSCSS.header}>
            <BasicBreadcrumbs/>

            <img src={logo} className={HeaderSCSS.logo} alt='Logo'/>

            <SignIn/>

        </header>
    )
}
