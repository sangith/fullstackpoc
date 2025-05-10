import { Meta, StoryObj } from "@storybook/angular";
import { HeaderBarComponent } from "./header-bar.component";

const meta: Meta<HeaderBarComponent> = {
  title: "Components/HeaderBar",
  component: HeaderBarComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<HeaderBarComponent>;

export const Default: Story = {
  args: {},
};
