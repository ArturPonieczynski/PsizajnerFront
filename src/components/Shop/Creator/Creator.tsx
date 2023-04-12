import React from "react";
import photo1 from "../../../images/il_570xN.3515106924_pz2n_20230412212920474.jpg";
import photo2 from "../../../images/il_570xN.3515106924_pz2n_20230412212858413.jpg";
import photo3 from "../../../images/il_570xN.3515106924_pz2n_20230412212838528.jpg";
import photo4 from "../../../images/il_570xN.3515106924_pz2n_20230412212819022.jpg";
import photo5 from "../../../images/il_570xN.3515106924_pz2n_20230412212759079.jpg";
import photo6 from "../../../images/il_570xN.3515106924_pz2n_20230412212741417.jpg";
import photo7 from "../../../images/il_570xN.3515106924_pz2n_20230412212920474.jpg";
import '../Gallery/Gallery.scss';

export const Creator = () =>
    (<>
        <div className='container'>
            <div className='test'><button><img src={photo1}/><p>color</p></button></div>
            <div className='test'><button><img src={photo2}/><p>color</p></button></div>
            <div className='test'><button><img src={photo3}/><p>color</p></button></div>
            <div className='test'><button><img src={photo4}/><p>color</p></button></div>
            <div className='test'><button><img src={photo5}/><p>color</p></button></div>
            <div className='test'><button><img src={photo6}/><p>color</p></button></div>
            <div className='test'><button><img src={photo7}/><p>color</p></button></div>
        </div>
    </>);
