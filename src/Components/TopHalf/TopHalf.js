import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';
import "./TopHalf.scss";

function TopHalf() {





    return (
        <body>
            <div className='parent'>
                <LeftContainer />
                <RightContainer />
            </div>
        </body>
    )
}

export default TopHalf;