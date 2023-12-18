import React from 'react';

const Cards = ({ birds, onAdopt }) => {
  return (
    <div>
      {birds.map(bird => (
        <div className="card" key={bird.name}>
          <h3>{bird.name}</h3>
          <img src={bird.img} alt={bird.name} />
          <p>Price: ${bird.amount}</p>
          <button onClick={() => onAdopt(bird)}>Adopt</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;