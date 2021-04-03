import React from 'react';
import loader from '../../../assets/img/loader.gif';

let Preloader = (props) => {
    return <div>
        <img alt='' width='60px' height='60px' src={loader} />
    </div>
}

export default Preloader;