import { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { DashboardComponent } from './dashboard.component';

const meta: Meta<DashboardComponent> = {
  title: 'Pages/Dashboard',
  component: DashboardComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<DashboardComponent>;

export const Default: Story = {
  args: {},
};

export const Interactive: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitLink = await canvas.findByText('Submit New Manuscript');
    await userEvent.click(submitLink);
    await waitFor(() => {
      expect(canvas.getByText('Select Article Type')).toBeInTheDocument();
    });
  },
}; 