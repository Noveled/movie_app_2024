import React from 'react';
import { useLocation } from 'react-router-dom';

function Detail(props) {
    const location = useLocation();
    console.log(location);
    
    return <span>ㅎㅇㅎㅇ</span>;
}

export default Detail;