import ActivityList from '../ActivityList/ActivityList';
import './RightContainerBottom.scss'
import { useParams } from 'react-router-dom';

const RightContainerBottom = () => {

    return (
            <div className="containerRight">
                <div className='containerRight__card'>
                    <div className='containerRight__card--inner'>
                    <ActivityList />
                    </div>
                </div>
            </div>
    )
}

export default RightContainerBottom;