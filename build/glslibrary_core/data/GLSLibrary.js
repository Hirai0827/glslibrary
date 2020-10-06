"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLSLibrary = void 0;
var GLSLibrary = /** @class */ (function () {
    function GLSLibrary() {
        this.data = {};
    }
    GLSLibrary.prototype.register = function (module) {
        this.data[module.name] = module;
    };
    GLSLibrary.prototype.find = function (name) {
        if (this.data[name]) {
            return true;
        }
        else {
            return false;
        }
    };
    GLSLibrary.prototype.get = function (name) {
        return this.data[name];
    };
    return GLSLibrary;
}());
exports.GLSLibrary = GLSLibrary;
//# sourceMappingURL=GLSLibrary.js.map