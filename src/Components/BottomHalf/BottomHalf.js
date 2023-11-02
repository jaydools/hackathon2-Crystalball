import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftContainerBottom from '../LeftContainerBottom/LeftContainerBottom';
import RightContainerBottom from '../RightContainerBottom/RightContainerBottom';
import './BottomHalf.scss'

function BottomHalf() {





    return (
        <body>
            <div className='containerBottomHalf'>
            <LeftContainerBottom />
            <RightContainerBottom />
            </div>
        </body>
    )
}

export default BottomHalf;