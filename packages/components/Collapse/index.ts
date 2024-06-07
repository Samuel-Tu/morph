import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import { withInstall } from "@samuel-morph/utils/install";

export const MCollapse = withInstall(Collapse);
export const MCollapseItem = withInstall(CollapseItem);

export * from "./types";
