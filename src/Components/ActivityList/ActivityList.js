import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <div>
      {activities.map((activity, index) => (
        <div key={index}>
          <h2>{activity.activity}</h2>
          <p>Type: {activity.type}</p>
          <p>Participants: {activity.participants}</p>
          <p>Price: {activity.price}</p>
          <p>Link: {activity.link}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;