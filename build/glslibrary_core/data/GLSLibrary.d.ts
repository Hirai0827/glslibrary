import { GLSLmodule } from "./GLSLmodule";
export declare class GLSLibrary {
    data: {
        [name: string]: GLSLmodule;
    };
    constructor();
    register(module: GLSLmodule): void;
    find(name: string): boolean;
    get(name: string): GLSLmodule;
}
