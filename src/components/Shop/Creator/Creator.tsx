import React from "react";
import GalleryCSS from "../Gallery/Gallery.module.scss";
import photo from "../../../images/logo.png";

export const Creator = () => {
    return (<>
        <div className={GalleryCSS.container}>
            <div className='test'><img src={photo}/></div>
            <div className='test'><img src={photo}/></div>
            <div className='test'><img src={photo}/></div>
            <div className='test'><img src={photo}/></div>
            <div className='test'><img src={photo}/></div>
            <div className='test'><img src={photo}/></div>
            <div className='test'><img src={photo}/></div>
            <div className='test'><img src={photo}/></div>
        </div>
    </>)
}