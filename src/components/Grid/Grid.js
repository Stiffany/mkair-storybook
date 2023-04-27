import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({ children, columns }) => {
  return <div className={`grid grid-${columns}`}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
};

Grid.defaultProps = {
  columns: 4,
};

export default Grid;
