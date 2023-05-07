import Button, {ButtonProps} from "@/components/BaseComponents/Button/Button";
import { FC } from "react";

export default {
    title: "BaseComponents/Button",
    component: Button
}

interface StoryTemplate extends FC<ButtonProps> {
    args?: ButtonProps;
}

const Template: StoryTemplate = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Primary Button",
    variant: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Secondary Button",
    variant: "secondary"
}