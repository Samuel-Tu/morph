import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import { withInstall } from "@morph/utils/install";

export const MCollapse = withInstall(Collapse);
export const MCollapseItem = withInstall(CollapseItem);

export * from "./types";
