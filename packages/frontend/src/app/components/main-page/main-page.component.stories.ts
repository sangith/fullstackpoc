import { Meta, StoryObj } from '@storybook/angular';
import { MainPageComponent } from './main-page.component';

const meta: Meta<MainPageComponent> = {
  title: 'Pages/MainPage',
  component: MainPageComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<MainPageComponent>;

export const Default: Story = {
  args: {},
}; 