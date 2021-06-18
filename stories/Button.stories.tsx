import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/Button';

const meta: Meta = {
  title: 'Button example',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ComponentProps<typeof Button>> = args => <Button {...args} />;

// *.bind({}) is a standard javascript technique for making a copy of a function.
// here, we're copying the Template function so each exported story can set its
// own properties on it
export const Default = Template.bind({});

Default.args = {
  children: 'Testing',
  px: 4,
  py: 2,
  variant: 'primary',
  // bg: 'blue',
  // textColor: 'white'
};