import { GLSLibrary } from "../data/GLSLibrary";
export declare class GLSLibraryImporter {
    lib: GLSLibrary;
    constructor();
    validate(): void;
    private detectLoop;
    replaceWithLib: (match: string, p1: string, p2: string) => string | undefined;
    import: (source: string) => string | null;
}
