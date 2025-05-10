import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { http, HttpResponse } from 'msw';
import { ArticleType } from '../../../models/journal';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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

const meta: Meta<DashboardComponent> = {
  title: 'Composite Components/Dashboard',
  component: DashboardComponent,
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

type Story = StoryObj<DashboardComponent>;

export const Default: Story = {
  args: {},
};

export const ClickedSubmitNewManuscript: Story = {
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