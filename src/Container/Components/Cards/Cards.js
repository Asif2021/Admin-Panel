import React from 'react';

function Cards(props) {
  return (
    
      <div className='col-md-3 mb-3'>
        <div className='card border-primary mb-3 h-100'>
          <div className='card-header'>{props.Header}</div>
          <div className='card-body text-primary'>
            <h5 className='card-title'>{props.title}</h5>
            <p className='card-text'>
              {props.text}
            </p>
          </div>
      </div>
    </div>
  );
}

export default Cards;
