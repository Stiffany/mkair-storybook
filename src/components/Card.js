import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ image, title, description }) => (
  <div className="card">
    <img className="card-image" src={image} alt={title} />
    <div className="card-content">
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
    </div>
  </div>
);
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image: '',
};

export default Card;