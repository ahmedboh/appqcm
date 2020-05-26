import { Question } from './Question';

export class Qcm {
private _id:number;
private _nom:string;
private _questions:Question[];
private _nbrq:number;
    // constructor(id:number,nom:string) {
    //     this._id=id;
    //     this._nom=nom;
    //     this._questions=[];
    //     this._nbrq=0;     
    // }
    constructor(){
        this._questions=[];
    }
public get id():number{
    return this._id;
}
public get nom():string{
    return this._nom;
}
public get questions():Question[]{
    return this._questions;
}
public get nbrq():number{
    return this._questions.length;
}
public set id(id:number){
    this._id=id;
}
public set nom(nom:string){
    this._nom=nom;
}
public set questions(ques:Question[]){
    this._questions=ques;
}
public set nbrq(nbrq:number){
    this._nbrq=nbrq;
}
public ajouterQuestion(quest:Question){
    this._questions.push(quest);
}

public valid():number{
    if(this.questions.length==0){
        return 0;
      }else{
        return this.questions[this.questions.length-1].id+1;
      }
}
}
