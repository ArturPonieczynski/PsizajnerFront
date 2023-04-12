import React, {useState} from "react";
import ShopCSS from "./Shop.module.scss"
import {ShopHeader} from "./ShopHeader/ShopHeader";
import { Gallery } from "./Gallery/Gallery";
import { Creator } from "./Creator/Creator";
import {SizeChart} from "./SizeChart/SizeChart";
import { ContactForm } from "../ContactForm/ContactForm";

export const Shop = () => {
    const [renderWindow, setRenderWindow] = useState<any>(<Gallery/>)

    return (<>
        <ShopHeader/>
        <div className={ShopCSS.container}>
            <div className={ShopCSS.menu}>
                <ul>
                    <button onClick={() => setRenderWindow(<Gallery/>)}><li>Ready to order</li></button>
                    <button onClick={() => setRenderWindow(<Creator/>)}><li>Create your own</li></button>
                    <button onClick={() => setRenderWindow(<SizeChart/>)}><li>Size chart</li></button>
                    <button onClick={() => setRenderWindow(<ContactForm/>)}><li>Contact us</li></button>
                </ul>
            </div>
            <div className={ShopCSS.presentation}>
                {renderWindow}
            </div>
        </div>
    </>)
}