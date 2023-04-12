import React  from "react";
import MainCSS from './Main.module.scss';
import {Header} from "../Header/Header";
import {NavLink} from "react-router-dom";
export const Main = () => {
    return (<>
        <Header/>
        <div className={MainCSS.bgc} id='main'>
            <NavLink className={MainCSS.btn} to='/shop'>
                GET STARTED →
            </NavLink>
        </div>
    </>)
}