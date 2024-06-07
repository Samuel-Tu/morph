import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from "@samuel-morph/utils/install";

export const MButton = withInstall(Button);
export const MButtonGroup = withInstall(ButtonGroup);

export * from "./types";
