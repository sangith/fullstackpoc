import type { Meta, StoryObj } from "@storybook/angular";
import { SubmissionStatusComponent } from "./submission-status.component";

const meta: Meta<SubmissionStatusComponent> = {
  title: "Components/SubmissionStatus",
  component: SubmissionStatusComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<SubmissionStatusComponent>;

export const Empty: Story = {
  args: {
    counts: {
      newSubmissions: {
        sentBackToAuthor: 0,
        incomplete: 0,
        waitingForApproval: 0,
        beingProcessed: 0,
      },
      revisions: {
        needingRevision: 0,
        sentBackToAuthor: 0,
        incomplete: 0,
        waitingForApproval: 0,
        beingProcessed: 0,
        declined: 0,
      },
      completed: {
        withDecision: 0,
      },
    },
  },
};

export const WithActiveSubmissions: Story = {
  args: {
    counts: {
      newSubmissions: {
        sentBackToAuthor: 2,
        incomplete: 1,
        waitingForApproval: 3,
        beingProcessed: 5,
      },
      revisions: {
        needingRevision: 4,
        sentBackToAuthor: 2,
        incomplete: 1,
        waitingForApproval: 3,
        beingProcessed: 2,
        declined: 1,
      },
      completed: {
        withDecision: 10,
      },
    },
  },
};

export const OnlyRevisions: Story = {
  args: {
    counts: {
      newSubmissions: {
        sentBackToAuthor: 0,
        incomplete: 0,
        waitingForApproval: 0,
        beingProcessed: 0,
      },
      revisions: {
        needingRevision: 5,
        sentBackToAuthor: 3,
        incomplete: 2,
        waitingForApproval: 4,
        beingProcessed: 1,
        declined: 2,
      },
      completed: {
        withDecision: 0,
      },
    },
  },
};
