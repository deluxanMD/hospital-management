import type { Meta, StoryObj } from "@storybook/react";
import NumericCards from "./numeric-cards.component";
import { LocalHospital } from "@mui/icons-material";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof NumericCards> = {
  component: NumericCards,
  decorators: [withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof NumericCards>;

export const ExampleField: Story = {
  args: {
    Icon: LocalHospital,
    title: "Hospital",
    value: "25",
  },
};
