import React from 'react';

const ListingCard = ({ residence, handleSubmission }) => {
  const { id, residence: name, location, singles, doubles, triples, quads, pool, laundry } = residence;

  return (
    <div className="listing-card" onClick={() => handleSubmission(id)}>
      <img src={'https://picsum.photos/id/240/300/200'} alt={`${name} Image`} />
      <div className="listing-details">
        <h3>{name}</h3>
        <p>{location}</p>
        <ul>
          <li>{singles} singles</li>
          <li>{doubles} doubles</li>
          <li>{triples} triples</li>
          <li>{quads} quads</li>
        </ul>
        <p>Pool: {pool ? 'Yes' : 'No'}</p>
        <p>Laundry: {laundry ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default ListingCard;
