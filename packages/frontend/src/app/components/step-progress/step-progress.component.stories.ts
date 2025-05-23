import { Meta, StoryObj } from "@storybook/angular";
import { StepProgressComponent } from "./step-progress.component";

const meta: Meta<StepProgressComponent> = {
  title: "Components/StepProgress",
  component: StepProgressComponent,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/tevhvV8FNUWn2JYRUGGt4w/EM?node-id=1-13&t=r6OS57qA6x6x1GBa-4",
    },
  },
};

export default meta;

type Story = StoryObj<StepProgressComponent>;

export const Default: Story = {
  args: {},
};
