import React from "react";
import ShopHeaderSCSS from './ShopHeader.module.scss';
import logo from '../../../images/logo.png';
import {SignIn} from "../../SignIn/SignIn";
import {Link} from "react-router-dom";

export const ShopHeader = () => {

    return (<>
        <header className={ShopHeaderSCSS.header}>

            <Link to='/'><img src={logo} className={ShopHeaderSCSS.logo} alt='Logo'/></Link>

            <div></div>

            <SignIn/>

        </header>
    </>)
}
