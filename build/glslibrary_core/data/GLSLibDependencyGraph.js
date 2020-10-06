"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLSLibDependencyGraph = void 0;
var GLSLregex_1 = require("./GLSLregex");
var GLSLibDependencyGraph = /** @class */ (function () {
    function GLSLibDependencyGraph(lib) {
        var _this = this;
        this.addEdge = function (from, to) {
            _this.data[from].add(to);
        };
        this.detectLoop = function () {
            Object.keys(_this.data).forEach(function (str) {
                _this.seen[str] = false;
                _this.finished[str] = false;
            });
            _this.hasLoop = false;
            //self loop check
            Object.keys(_this.data).forEach(function (str) {
                if (_this.data[str].has(str)) {
                    _this.hasLoop = true;
                    return false;
                }
            });
            _this.dfs(Object.keys(_this.data)[0]);
            console.log(_this.data);
            console.log(_this.hasLoop ? "LoopDetected" : "NonLoop");
            return _this.hasLoop;
        };
        this.dfs = function (v) {
            _this.seen[v] = true;
            // @ts-ignore
            var keys = __spreadArrays(_this.data[v]);
            for (var i = 0; i < keys.length; i++) {
                if (_this.finished[keys[i]]) {
                    continue;
                }
                if (_this.seen[keys[i]] && !_this.finished[keys[i]]) {
                    _this.hasLoop = true;
                    return;
                }
                _this.dfs(keys[i]);
                if (_this.hasLoop) {
                    return;
                }
            }
            _this.finished[v] = true;
        };
        var keys = Object.keys(lib.data);
        this.data = {};
        this.seen = {};
        this.finished = {};
        this.hasLoop = false;
        for (var i = 0; i < keys.length; i++) {
            this.data[keys[i]] = new Set();
            var src = lib.data[keys[i]].src;
            var includeRegex = GLSLregex_1.GLSLibraryRegex.includeRegex;
            // @ts-ignore
            var regResArray = __spreadArrays(src.matchAll(includeRegex));
            for (var j = 0; j < regResArray.length; j++) {
                this.data[keys[i]].add(regResArray[j][2]);
            }
        }
    }
    return GLSLibDependencyGraph;
}());
exports.GLSLibDependencyGraph = GLSLibDependencyGraph;
//# sourceMappingURL=GLSLibDependencyGraph.js.map