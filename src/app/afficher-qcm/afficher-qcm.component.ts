import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-afficher-qcm',
  templateUrl: './afficher-qcm.component.html',
  styleUrls: ['./afficher-qcm.component.css']
})
export class AfficherQcmComponent implements OnInit {
  tab;
  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
    this.tab=this.ser.qcms;
  }

}
