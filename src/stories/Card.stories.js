import React from 'react';
import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Card Title',
  description: 'This is a sample card description.',
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Card Title',
  description: 'This is a sample card description.',
};
