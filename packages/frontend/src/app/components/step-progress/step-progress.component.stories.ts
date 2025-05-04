import { Meta, StoryObj } from '@storybook/angular';
import { StepProgressComponent } from './step-progress.component';

const meta: Meta<StepProgressComponent> = {
  title: 'Submission/StepProgress',
  component: StepProgressComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StepProgressComponent>;

export const Default: Story = {
  args: {},
}; 