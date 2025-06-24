import { Meta, StoryObj } from "@storybook/angular";
import { SampleComponent } from "./sample-component.component";

const meta: Meta<SampleComponent> = {
  title: "Components/SampleComponent",
  component: SampleComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<SampleComponent>;

export const Default: Story = {
  args: {},
};
