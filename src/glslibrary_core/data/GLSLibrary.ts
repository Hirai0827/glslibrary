import {GLSLmodule} from "./GLSLmodule";

export class GLSLibrary {
    data:{[name:string]:GLSLmodule};
    constructor() {
        this.data = {};
    }
    register(module:GLSLmodule){
        this.data[module.name] = module;
    }
    find(name:string){
        if(this.data[name]){
            return true;
        }else{
            return false;
        }
    }
    get(name:string){
        return this.data[name];
    }
}

