import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, description }) => (
  // ...
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