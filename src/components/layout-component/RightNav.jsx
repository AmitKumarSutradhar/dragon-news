import React from 'react';
import SocailaLogin from '../SocailaLogin';
import FindUs from '../FindUs';

const RightNav = () => {
    return (
        <div className='space-y-5'>
           <SocailaLogin></SocailaLogin>
           <FindUs></FindUs>
        </div>
    );
};

export default RightNav;