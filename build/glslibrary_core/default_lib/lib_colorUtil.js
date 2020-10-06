"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUtil = void 0;
exports.ColorUtil = {
    name: "ColorUtil",
    src: "\n       vec3 hsv2rgb(vec3 hsv){\n            float h = hsv.r;\n            float s = hsv.g;\n            float v = hsv.b;\n            return ((clamp(abs(fract(h+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;\n       }\n       float getGrayscale(vec3 col){\n            return dot(col,vec3(0.299,0.587,0.114));\n       }\n    "
};
//# sourceMappingURL=lib_colorUtil.js.map