import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftContainerBottom from '../LeftContainerBottom/LeftContainerBottom';
import RightContainerBottom from '../RightContainerBottom/RightContainerBottom';
import './BottomHalf.scss'

function BottomHalf() {
    const [activity, setActivity] = useState({}); // State to track the selected option




    return (
        <body>
            <div className='containerBottomHalf'>
            <LeftContainerBottom 
            activity={activity}
            setActivity={setActivity}/>
            <RightContainerBottom activity={activity}/>
            </div>
        </body>
    )
}

export default BottomHalf;