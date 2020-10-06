"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RayMarchingUtil = void 0;
exports.RayMarchingUtil = {
    name: "RayMarchingUtil",
    src: "\nfloat sphere(vec3 p,vec3 c,float radius){\n    return length(p-c) - radius;\n}\nfloat box( vec3 p,vec3 c, vec3 b)\n{\n  vec3 q = abs(p - c) - b;\n  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);\n}\nfloat pillar(vec2 pAxis,vec2 cAxis,float radius){\n    return length(pAxis-cAxis) - radius;\n}\n\nfloat cylinder( vec3 p, float h, float r )\n{\n  vec2 d = abs(vec2(length(p.xz),p.y)) - vec2(h,r);\n  return min(max(d.x,d.y),0.0) + length(max(d,0.0));\n}\n\nfloat line( vec3 p, vec3 a, vec3 b, float r )\n{\n  vec3 pa = p - a, ba = b - a;\n  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n  return length( pa - ba*h ) - r;\n}\n\nfloat torus( vec3 p,vec3 c, float radius,float width )\n{\n  vec2 q = vec2(length(p.xz - c.xz)-radius,p.y - c.y);\n  return length(q)-width;\n}\nvec3 fractCell(vec3 p,vec3 l){\n    vec3 q;\n    q.x = (fract(p.x/l.x + 0.5) - 0.5) * l.x;\n    q.y = (fract(p.y/l.y + 0.5) - 0.5) * l.y;\n    q.z = (fract(p.z/l.z + 0.5) - 0.5) * l.z;\n    return q;\n}\n\n"
};
//# sourceMappingURL=lib_rayMarchingUtil.js.map