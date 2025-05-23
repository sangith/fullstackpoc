import { Meta, StoryObj, applicationConfig } from "@storybook/angular";
import { ArticleTypeSubmissionFlowComponent } from "./article-type-submission-flow.component";
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { http, HttpResponse } from "msw";
import { ArticleType } from "../../../models/journal";

const mockArticleTypes: ArticleType[] = [
  {
    id: "1",
    name: "Research Article",
    description:
      "Original research articles presenting significant findings in cancer research.",
    wordLimit: 5000,
    abstractRequired: true,
    keywordsRequired: true,
    guidelines: "https://www.cell.com/trends/cancer/authors",
    coverLetterRequired : true,
  },
  {
    id: "2",
    name: "Editorial",
    description: "Short expert commentary.",
    wordLimit: 2000,
    abstractRequired: false,
    keywordsRequired: true,
    guidelines: "https://www.cell.com/trends/cancer/authors",
    coverLetterRequired : true,
  },
];

const meta: Meta<ArticleTypeSubmissionFlowComponent> = {
  title: "Composite Components/ArticleTypeSubmissionFlow",
  component: ArticleTypeSubmissionFlowComponent,
  tags: ["autodocs"],
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)],
    }),
  ],
  parameters: {
    msw: {
      handlers: [
        http.get("/journal-meta-data/1", () => {
          return HttpResponse.json(mockArticleTypes);
        }),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<ArticleTypeSubmissionFlowComponent>;

export const Default: Story = {
  args: {},
};
