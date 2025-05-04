import { Meta, StoryObj } from '@storybook/angular';
import { ArticleTypeSelectionComponent } from './article-type-selection.component';

const meta: Meta<ArticleTypeSelectionComponent> = {
  title: 'Submission/ArticleTypeSelection',
  component: ArticleTypeSelectionComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ArticleTypeSelectionComponent>;

export const Default: Story = {
  args: {},
}; 