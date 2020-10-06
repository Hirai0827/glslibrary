import { GLSLibrary } from "./GLSLibrary";
export declare class GLSLibDependencyGraph {
    data: {
        [name: string]: Set<string>;
    };
    seen: {
        [name: string]: boolean;
    };
    finished: {
        [name: string]: boolean;
    };
    hasLoop: boolean;
    constructor(lib: GLSLibrary);
    addEdge: (from: string, to: string) => void;
    detectLoop: () => boolean;
    dfs: (v: string) => void;
}
