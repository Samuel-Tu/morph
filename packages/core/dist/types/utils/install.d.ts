import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(component: T) => SFCWithInstall<T>;
export declare function makeInstaller(components: Plugin[]): Plugin;
export {};
