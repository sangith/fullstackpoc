import { Meta, StoryObj } from '@storybook/angular';
import { StepProgressComponent } from './step-progress.component';

const meta: Meta<StepProgressComponent> = {
  title: 'Components/StepProgress',
  component: StepProgressComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StepProgressComponent>;

export const Default: Story = {
  args: {},
}; 