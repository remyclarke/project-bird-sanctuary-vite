import React from 'react';

const Cards = ({ birds, onAdopt }) => {
  return (
    <div className="row">
      {birds.map(bird => (
        <div className="col-md-4 mb-4" key={bird.name}>
          <div className="card">
            <img src={bird.img} alt={bird.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{bird.name}</h5>
              <p className="card-text">Price: ${bird.amount}</p>
              <button onClick={() => onAdopt(bird)} className="btn btn-block btn-warning">Adopt</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;