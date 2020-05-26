export class Question {
    private _id :number;
    private _question:string;
    private _type:string;
    private _proposition:string[];
    private _reponse:string[];
    // constructor(id:number,ques:string,type:string,) {
    //   this._id=id;
    //   this._question=ques;
    //   this._type=type; 
    //   this._proposition=[];
    //   this._proposition=[];      
    // }
    constructor(){
        this._type="unerep";
        this._proposition=[];
        this._reponse=[];
    }
    public get id():number{
        return this._id;
    }
    public get question():string{
        return this._question;
    }
    public get type():string{
        return this._type;
    }
    public get proposition():string[]{
        return this._proposition;
    }
    public get reponse():string[]{
        return this._reponse;
    }
    public set id(id:number){
        this._id=id;
    }
    public set question(ques:string){
        this._question=ques;
    }
    public set type(type:string){
        this._type=type;
    }
    public set proposition(prop:string[]){
        this._proposition=prop;
    }
    public set reponse(rep:string[]){
        this._reponse=rep;
    }
    public ajouterProposition(prop:string):boolean{
        for(let x of this._proposition ){
            if(x==prop){
                return false;
            }
        }
        this._proposition.push(prop);
        return true;
    }
    public ajouterReponse(rep:string):boolean{
        for(let x of this._reponse ){
            if(x==rep){
                return false;
            }
        }
        this._reponse.push(rep);
        return true;
    }
    
    public exist(rep:string):boolean{
        for(let x of this._proposition ){
            if(x==rep){
                return true;
            }
        }
        return false;
     }


}