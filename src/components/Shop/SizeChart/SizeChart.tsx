import React from "react";
import SizeChartCSS from "./SizeChart.module.scss";
import photo from "../../../images/1681328099124.png";

export const SizeChart = () => {
    return (<>
        <div className={SizeChartCSS.container}>
            <div><img src={photo}/></div>
        </div>
    </>)
}