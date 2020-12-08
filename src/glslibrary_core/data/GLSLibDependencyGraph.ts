import {GLSLibrary} from "./GLSLibrary";
import {GLSLibraryRegex} from "./GLSLregex";

export class GLSLibDependencyGraph {
    data:{[name:string]:Set<string>};
    seen:{[name:string]:boolean};
    finished:{[name:string]:boolean};
    hasLoop:boolean;
    constructor(lib:GLSLibrary) {
        const keys = Object.keys(lib.data);
        this.data = {};
        this.seen = {};
        this.finished = {};
        this.hasLoop = false;
        for(let i = 0; i < keys.length; i++){
            this.data[keys[i]] = new Set<string>();
            const src = lib.data[keys[i]].src;
            const includeRegex = GLSLibraryRegex.includeRegex;
            const regResArray = Array.from(src.matchAll(includeRegex));
            for(let j = 0; j < regResArray.length; j++){
                this.data[keys[i]].add(regResArray[j][2]);
            }
        }

    }
    addEdge = (from:string,to:string) => {
        this.data[from].add(to);
    };
    detectLoop = () => {
        if(Object.keys(this.data).length == 0){
            //ライブラリ無し
            return false;
        }
        Object.keys(this.data).forEach((str) => {
            this.seen[str] = false;
            this.finished[str] = false;
        });
        this.hasLoop = false;
        //self loop check
        Object.keys(this.data).forEach((str) => {
           if(this.data[str].has(str)){
               this.hasLoop = true;
               return true;
           }
        });
        this.dfs(Object.keys(this.data)[0]);
        console.log(this.data);
        console.log(this.hasLoop ? "LoopDetected" : "NonLoop");
        return this.hasLoop;
    };
    dfs = (v:string) => {
        this.seen[v] = true;
        const keys = new Array<string>();
        this.data[v].forEach(v => keys.push(v));
        for(let i = 0; i < keys.length; i++){
            if(this.finished[keys[i]]){
                continue;
            }
            if(this.seen[keys[i]] && !this.finished[keys[i]]){
                this.hasLoop = true;
                return;
            }
            this.dfs(keys[i]);
            if(this.hasLoop){
                return;
            }
        }
        this.finished[v] = true;

    };
}
