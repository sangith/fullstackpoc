import { Meta, StoryObj, applicationConfig } from "@storybook/angular";
import { ArticleTypeSelectionComponent } from "./article-type-selection.component";
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { http, HttpResponse } from "msw";
import { mockArticleTypes } from "../../mocks/articleTypes";

const meta: Meta<ArticleTypeSelectionComponent> = {
  title: "Components/ArticleTypeSelection",
  component: ArticleTypeSelectionComponent,
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

type Story = StoryObj<ArticleTypeSelectionComponent>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/journal-meta-data/1", () => new Promise(() => {})), // never resolves
      ],
    },
  },
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          "/journal-meta-data/1",
          () => new HttpResponse(null, { status: 500 }),
        ),
      ],
    },
  },
};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [http.get("/journal-meta-data/1", () => HttpResponse.json([]))],
    },
  },
};
