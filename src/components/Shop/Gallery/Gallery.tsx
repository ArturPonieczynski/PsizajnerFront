import React from "react";
import GalleryCSS from "./Gallery.module.scss";
import photo from "../../../images/il_570xN.3515106924_pz2n.webp";

export const Gallery = () => {
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