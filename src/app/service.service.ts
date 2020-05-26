import { Injectable } from '@angular/core';
import { Qcm } from './Qcm';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  qcms:Qcm[]=[];
  ajouter(qcm:Qcm){
  this.qcms.push(qcm);
  }
  valid():number{
    if(this.qcms.length==0){
      return 0;
    }else{
      return this.qcms[this.qcms.length-1].id+1;
    }
  }
  recupererQcm(id:number):Qcm{
    for(let q of this.qcms){
      if(q.id==id)
       return q;
    }
  }
  constructor() { }
}
