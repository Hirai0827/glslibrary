import {GLSLmodule} from "../data/GLSLmodule";

export const RayMarchingUtil:GLSLmodule = {
    name:"RayMarchingUtil",
    src:
        `
float sphere(vec3 p,vec3 c,float radius){
    return length(p-c) - radius;
}
float box( vec3 p,vec3 c, vec3 b)
{
  vec3 q = abs(p - c) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float pillar(vec2 pAxis,vec2 cAxis,float radius){
    return length(pAxis-cAxis) - radius;
}

float cylinder( vec3 p, float h, float r )
{
  vec2 d = abs(vec2(length(p.xz),p.y)) - vec2(h,r);
  return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}

float line( vec3 p, vec3 a, vec3 b, float r )
{
  vec3 pa = p - a, ba = b - a;
  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
  return length( pa - ba*h ) - r;
}

float torus( vec3 p,vec3 c, float radius,float width )
{
  vec2 q = vec2(length(p.xz - c.xz)-radius,p.y - c.y);
  return length(q)-width;
}
vec3 fractCell(vec3 p,vec3 l){
    vec3 q;
    q.x = (fract(p.x/l.x + 0.5) - 0.5) * l.x;
    q.y = (fract(p.y/l.y + 0.5) - 0.5) * l.y;
    q.z = (fract(p.z/l.z + 0.5) - 0.5) * l.z;
    return q;
}

`
}
