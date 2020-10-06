"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtil = void 0;
exports.MathUtil = {
    name: "MathUtil",
    src: "\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\nmat2 genRot(float v){\n    return mat2(cos(v),sin(v),-sin(v),cos(v));\n}\nconst float PI = 3.141592;\n\n"
};
//# sourceMappingURL=lib_mathUtil.js.map