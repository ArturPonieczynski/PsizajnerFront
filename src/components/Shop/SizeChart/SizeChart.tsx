import React from "react";
import SizeChartCSS from "./SizeChart.module.scss";
import photo from "../../../images/sizingweight_480x480.webp";

export const SizeChart = () => {
    return (<>
        <div className={SizeChartCSS.container}>
            <div className='test'><img src={photo}/></div>
        </div>
    </>)
}