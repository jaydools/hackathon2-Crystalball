import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftContainerBottom from '../LeftContainerBottom/LeftContainerBottom';
import RightContainerBottom from '../RightContainerBottom/RightContainerBottom';

function BottomHalf() {





    return (
        <body>
            <LeftContainerBottom />
            <RightContainerBottom />
        </body>
    )
}

export default BottomHalf;