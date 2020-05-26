import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-repondre-qcm',
  templateUrl: './repondre-qcm.component.html',
  styleUrls: ['./repondre-qcm.component.css']
})
export class RepondreQcmComponent implements OnInit {
  qcm;
  constructor(private activer:ActivatedRoute, private ser:ServiceService) { }

  ngOnInit(): void {
    this.qcm=this.ser.recupererQcm(this.activer.snapshot.params['id']);
  }

}
