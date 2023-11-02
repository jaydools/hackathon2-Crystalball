import ActivityList from '../ActivityList/ActivityList';
import './RightContainerBottom.scss'
import { useParams } from 'react-router-dom';

const RightContainerBottom = ({ activity }) => {

    return (
            <div className="containerRight">
                <div className='containerRight__card'>
                    <div className='containerRight__card--inner'>
                    <ActivityList activity={activity}/>
                    </div>
                </div>
            </div>
    )
}

export default RightContainerBottom;