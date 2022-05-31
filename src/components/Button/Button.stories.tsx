import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Text",
};
Default.storyName = "Text (default)"; 

export const Contained = Template.bind({});
Contained.args = {
  children: "Contained",
  variant: "contained",
};
