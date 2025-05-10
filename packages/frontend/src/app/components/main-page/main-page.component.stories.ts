import { Meta, StoryObj,applicationConfig } from '@storybook/angular';
import { MainPageComponent } from './main-page.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { http, HttpResponse } from 'msw';
import { ArticleType } from '../../../models/journal';
const mockArticleTypes: ArticleType[] = [
  {
    id: '1',
    name: 'Research Article',
    description: 'Original research articles presenting significant findings in cancer research.',
    wordLimit: 5000,
    abstractRequired: true,
    keywordsRequired: true,
    guidelines: 'https://www.cell.com/trends/cancer/authors'
  },
  {
    id: '2',
    name: 'Editorial',
    description: 'Short expert commentary.',
    wordLimit: 2000,
    abstractRequired: false,
    keywordsRequired: true,
    guidelines: 'https://www.cell.com/trends/cancer/authors'
  }
];

const meta: Meta<MainPageComponent> = {
  title: 'Pages/MainPage',
  component: MainPageComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule)
      ]
    })
  ],
  parameters: {
    msw: {
      handlers: [
        http.get('/journal-meta-data/1', () => {
          return HttpResponse.json(mockArticleTypes);
        })
      ]
    }
  }
};

export default meta;

type Story = StoryObj<MainPageComponent>;

export const Default: Story = {
  args: {},
}; 