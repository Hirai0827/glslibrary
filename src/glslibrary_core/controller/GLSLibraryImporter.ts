import {GLSLibrary} from "../data/GLSLibrary";
import {GLSLibraryRegex} from "../data/GLSLregex";
import {GLSLibDependencyGraph} from "../data/GLSLibDependencyGraph";

export class GLSLibraryImporter {
    lib:GLSLibrary;
    constructor() {
    }
    validate(){
        this.detectLoop();
    }
    private detectLoop(){

    }
    replaceWithLib = (match,p1,p2) => {
        if(p2){
            if(this.lib.data[p2]){
                return this.lib.data[p2].src;
            }else{
                console.error("Unexpect Library Error");
            }
        }
    };
    import = (source:string) => {
        const includeRegex = GLSLibraryRegex.includeRegex;
        const dependencyGraph = new GLSLibDependencyGraph(this.lib);
        const hasLoop = dependencyGraph.detectLoop();
        if(hasLoop){
            console.error("Loop Detected");
            return null;
        }else{
            const matchArray = source.match(includeRegex);
            if(matchArray){
                const replacedSource = source.replace(includeRegex,this.replaceWithLib);
                return this.import(replacedSource);
            }else{
                console.log("import complete.");
                return source;
            }
        }

    }


}
