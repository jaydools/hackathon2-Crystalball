import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';

function TopHalf() {





    return (
        <body>
            <div>
                <LeftContainer />
                <RightContainer />
            </div>
        </body>
    )
}

export default TopHalf;