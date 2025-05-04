import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ArticleTypeSelectionComponent } from './article-type-selection.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
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

const meta: Meta<ArticleTypeSelectionComponent> = {
  title: 'Submission/ArticleTypeSelection',
  component: ArticleTypeSelectionComponent,
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

type Story = StoryObj<ArticleTypeSelectionComponent>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/journal-meta-data/1', () => new Promise(() => {})) // never resolves
      ]
    }
  }
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/journal-meta-data/1', () => new HttpResponse(null, { status: 500 }))
      ]
    }
  }
};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/journal-meta-data/1', () => HttpResponse.json([]))
      ]
    }
  }
}; 