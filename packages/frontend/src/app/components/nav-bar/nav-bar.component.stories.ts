import { Meta, StoryObj } from "@storybook/angular";
import { NavBarComponent } from "./nav-bar.component";

const meta: Meta<NavBarComponent> = {
  title: "Components/NavBar",
  component: NavBarComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<NavBarComponent>;

export const Default: Story = {
  args: {},
};
