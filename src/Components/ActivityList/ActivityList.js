import React from 'react';

const ActivityList = ({ activity }) => {
  return (
    <div>
      {activity && (
        <div>
          <h2>{activity.activity}</h2>
          <p>Type: {activity.type}</p>
          <p>Participants: {activity.participants}</p>
          <p>Price: {activity.price}</p>
        </div>
        )}
    </div>
  );
};

export default ActivityList;