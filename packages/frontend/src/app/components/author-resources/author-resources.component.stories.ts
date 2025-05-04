import { Meta, StoryObj } from '@storybook/angular';
import { AuthorResourcesComponent } from './author-resources.component';

const meta: Meta<AuthorResourcesComponent> = {
  title: 'Dashboard/AuthorResources',
  component: AuthorResourcesComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AuthorResourcesComponent>;

export const Default: Story = {
  args: {},
}; 