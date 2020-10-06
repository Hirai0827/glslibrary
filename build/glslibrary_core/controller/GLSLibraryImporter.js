"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLSLibraryImporter = void 0;
var GLSLibrary_1 = require("../data/GLSLibrary");
var GLSLregex_1 = require("../data/GLSLregex");
var GLSLibDependencyGraph_1 = require("../data/GLSLibDependencyGraph");
var GLSLibraryImporter = /** @class */ (function () {
    function GLSLibraryImporter() {
        var _this = this;
        this.replaceWithLib = function (match, p1, p2) {
            if (p2) {
                if (_this.lib.data[p2]) {
                    return _this.lib.data[p2].src;
                }
                else {
                    console.error("Unexpect Library Error");
                }
            }
        };
        this.import = function (source) {
            var includeRegex = GLSLregex_1.GLSLibraryRegex.includeRegex;
            var dependencyGraph = new GLSLibDependencyGraph_1.GLSLibDependencyGraph(_this.lib);
            var hasLoop = dependencyGraph.detectLoop();
            if (hasLoop) {
                console.error("Loop Detected");
                return null;
            }
            else {
                var matchArray = source.match(includeRegex);
                if (matchArray) {
                    // @ts-ignore
                    var replacedSource = source.replace(includeRegex, _this.replaceWithLib);
                    return _this.import(replacedSource);
                }
                else {
                    console.log("import complete.");
                    return source;
                }
            }
        };
        this.lib = new GLSLibrary_1.GLSLibrary();
    }
    GLSLibraryImporter.prototype.validate = function () {
        this.detectLoop();
    };
    GLSLibraryImporter.prototype.detectLoop = function () {
    };
    return GLSLibraryImporter;
}());
exports.GLSLibraryImporter = GLSLibraryImporter;
//# sourceMappingURL=GLSLibraryImporter.js.map