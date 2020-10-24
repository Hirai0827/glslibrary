import {GLSLmodule} from "../data/GLSLmodule";

export const MathUtil:GLSLmodule = {
    name:"MathUtil",
    description:"Utilities about Math such as random and genRot",
    src:`
float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
mat2 genRot(float v){
    return mat2(cos(v),sin(v),-sin(v),cos(v));
}
const float PI = 3.141592;

`
};
