import {GLSLibrary} from "../glslibrary_core/data/GLSLibrary";
import {GLSLmodule} from "../glslibrary_core/data/GLSLmodule";
import {GLSLibraryImporter} from "../glslibrary_core/controller/GLSLibraryImporter";

test("include test",() => {
    const glslib = new GLSLibrary();
    const glsLmodule = new GLSLmodule();
    const glsLibraryImporter = new GLSLibraryImporter();
    glsLibraryImporter.lib = glslib;
    glsLmodule.src = "lib included";
    glsLmodule.name = "sample";
    glslib.register(glsLmodule);
    //NoLib
    expect(glsLibraryImporter.import("hoge")).toBe("hoge");
    expect(glsLibraryImporter.import("#include<sample>")).toBe("lib included");
    expect(glsLibraryImporter.import("#include <sample>")).toBe("lib included");
    expect(glsLibraryImporter.import("#include < sample >")).toBe("#include < sample >");
});
