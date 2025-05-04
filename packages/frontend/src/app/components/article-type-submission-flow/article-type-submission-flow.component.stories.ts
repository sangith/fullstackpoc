import { Meta, StoryObj } from '@storybook/angular';
import { ArticleTypeSubmissionFlowComponent } from './article-type-submission-flow.component';

const meta: Meta<ArticleTypeSubmissionFlowComponent> = {
  title: 'Submission/ArticleTypeSubmissionFlow',
  component: ArticleTypeSubmissionFlowComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ArticleTypeSubmissionFlowComponent>;

export const Default: Story = {
  args: {},
}; 