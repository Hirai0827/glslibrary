import {GLSLmodule} from "../data/GLSLmodule";

export const ColorUtil:GLSLmodule = {
    name:"ColorUtil",
    description:"Utilities which enable us to Control Color",
    src:`
       vec3 hsv2rgb(vec3 hsv){
            float h = hsv.r;
            float s = hsv.g;
            float v = hsv.b;
            return ((clamp(abs(fract(h+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
       }
       float getGrayscale(vec3 col){
            return dot(col,vec3(0.299,0.587,0.114));
       }
    `
};
