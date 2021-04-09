import { Component, OnInit, Input } from '@angular/core';
import { Mission } from "../models/mission";

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent implements OnInit {
  @Input() mission?: Mission;

  constructor() { }

  ngOnInit(): void {
  }

}
