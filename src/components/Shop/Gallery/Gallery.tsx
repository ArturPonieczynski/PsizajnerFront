import React from "react";
import photo1 from "../../../images/il_570xN.3515106924_pz2n 2.jpg";
import photo2 from "../../../images/il_570xN.3515106924_pz2n_20230412205518403.jpg";
import photo3 from "../../../images/il_570xN.3515106924_pz2n_20230412205545110.jpg";
import photo4 from "../../../images/il_570xN.3515106924_pz2n_20230412205605114.jpg";
import photo5 from "../../../images/il_570xN.3515106924_pz2n_20230412205627096.jpg";
import photo6 from "../../../images/il_570xN.3515106924_pz2n_20230412205642559.jpg";
import './Gallery.scss';

export const Gallery = () => {
    return (<>
        <div className='container'>
            <div className='test'><button><img src={photo1}/><p>Doggy bucket hat</p></button></div>
            <div className='test'><button><img src={photo2}/><p>Sunday brunch S</p></button></div>
            <div className='test'><button><img src={photo3}/><p>Mustard yellow M</p></button></div>
            <div className='test'><button><img src={photo4}/><p>Ocean breeze L</p></button></div>
            <div className='test'><button><img src={photo5}/><p>Easter bunny S</p></button></div>
            <div className='test'><button><img src={photo6}/><p>Pastel rainbow M</p></button></div>
        </div>
    </>)
}