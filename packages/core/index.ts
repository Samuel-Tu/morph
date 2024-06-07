import { makeInstaller } from "@samuel-morph/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";
import printLogs from "./printLogs";
import "@samuel-morph/theme/index.css";

printLogs();

library.add(fas);
const installer = makeInstaller(components);

export * from "@samuel-morph/components";
export default installer;
