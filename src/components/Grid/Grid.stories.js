import React from 'react';
import Grid from './Grid';
import './Grid.css';

export default {
  title: 'Components/Grid',
  component: Grid,
};

const Template = (args) => (
  <Grid {...args}>
    <div className="grid-item">Item 1</div>
    <div className="grid-item">Item 2</div>
    <div className="grid-item">Item 3</div>
    <div className="grid-item">Item 4</div>
    <div className="grid-item">Item 5</div>
    <div className="grid-item">Item 6</div>
  </Grid>
);

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: 2,
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  columns: 3,
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  columns: 4,
};
