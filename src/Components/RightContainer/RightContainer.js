import React from 'react';
import "./RightContainer.scss";

function RightContainer() {
  return (
    <div className='explination'>
        <h2 className='explination__header'>Explination</h2>
        <div className='explination__text'>
          <p>This is a text placeholder
                {/* INSERT DYNAMICS HERE */}
              how to use the app will be displayed here</p>
        </div>
    </div>
  )
}

export default RightContainer