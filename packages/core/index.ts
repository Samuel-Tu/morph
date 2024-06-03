import { makeInstaller } from "@morph/utils";
import components from "./components";
import "@morph/theme/index.scss";

const installer = makeInstaller(components);

export * from "@morph/components";
export default installer;
