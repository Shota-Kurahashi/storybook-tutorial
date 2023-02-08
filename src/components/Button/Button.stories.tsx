/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable storybook/story-exports */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@mantine/core";

export default { component: Button } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  color: "blue",
  variant: "filled",
  size: "md",
  radius: "sm",
  fullWidth: false,
  disabled: false,
  loading: false,
  onClick: () => console.log("Button clicked"),
};
