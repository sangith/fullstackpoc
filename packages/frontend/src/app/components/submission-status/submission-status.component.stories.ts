import { Meta, StoryObj } from '@storybook/angular';
import { SubmissionStatusComponent } from './submission-status.component';

const meta: Meta<SubmissionStatusComponent> = {
  title: 'Dashboard/SubmissionStatus',
  component: SubmissionStatusComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SubmissionStatusComponent>;

export const Default: Story = {
  args: {},
}; 