import React from 'react';

const List = ({ selectedProfile }) => {
  return (
    <div >
    <ul className='list-display'> 
      {selectedProfile.map(profile => (
        <li key={profile.id} className='card'>
            <div>
          <img src={profile.picture} alt={`${profile.firstName} ${profile.lastName}`} />
          </div>
          <div className='card-details'>
            <p>{`${profile.id}`} </p>
            <p style={{fontWeight:'bold'}}>{`${profile.title} ${profile.firstName} ${profile.lastName}`}</p>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default List;
