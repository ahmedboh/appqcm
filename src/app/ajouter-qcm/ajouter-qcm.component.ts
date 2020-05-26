import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Qcm } from '../Qcm';
import { Question } from '../Question';

@Component({
  selector: 'app-ajouter-qcm',
  templateUrl: './ajouter-qcm.component.html',
  styleUrls: ['./ajouter-qcm.component.css']
})
export class AjouterQcmComponent implements OnInit {
  rep="";prop="";testr=false;
  qcm=new Qcm();
  question= new Question();

  onAjouterProp(){
    if(this.prop!=""){
    this.question.ajouterProposition(this.prop);
    this.prop="";
    }
  }
  onAjouterRep(){
    if(this.question.exist(this.rep)||this.rep==this.prop){
    this.question.ajouterReponse(this.rep);
    this.rep="";
    this.testr=true;
    }else{
    alert(this.rep+" ce reponse n'existe pas dans les proposition");
    this.rep="";
    this.testr=false;    
    }
    

  }


      
    
  constructor(private servqcm:ServiceService) { }
  onAjouteq(){
    let d=this.prop;
    this.onAjouterProp();
    this.prop=d;
    this.onAjouterRep();
    if(this.testr){
    this.qcm.ajouterQuestion(this.question);
    this.question= new Question(); 
    this.question.id=this.qcm.valid();
    }
  }

  onAjoute(){
    this.onAjouteq();
    if(this.testr){
    this.servqcm.ajouter(this.qcm);
    this.qcm=new Qcm();
    this.qcm.id=this.servqcm.valid();
    }
  }
  
  ngOnInit(): void {
    this.qcm.id=this.servqcm.valid();
    this.question.id=this.qcm.valid();
   
  }

}
