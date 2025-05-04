import type { Meta, StoryObj } from '@storybook/angular';
import { LoginComponent } from './login.component';

const meta: Meta<LoginComponent> = {
  title: 'Components/Login',
  component: LoginComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoginComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: {
      ...args,
      submit: (data: any) => console.log('Login data:', data),
    },
  }),
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => ({
    props: {
      ...args,
      submit: (data: any) => console.log('Login data:', data),
    },
  }),
};

export const WithError: Story = {
  args: {
    error: 'Invalid email or password',
  },
  render: (args) => ({
    props: {
      ...args,
      submit: (data: any) => console.log('Login data:', data),
    },
  }),
}; 