import React from 'react';
import "./ActivityList.scss"

const ActivityList = ({ activity }) => {
  return (
    <div>
      {activity && (
        <div className='input'>
          <h2 className='input__header'>{activity.activity}</h2>
          <p className='input__type'>Type: {activity.type}</p>
          <p className='input__participants'>Participants: {activity.participants}</p>
          <p className='input__price'>Price: {activity.price}</p>
        </div>
        )}
    </div>
  );
};

export default ActivityList;