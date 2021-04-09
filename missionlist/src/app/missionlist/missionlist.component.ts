import { Component, OnInit } from '@angular/core';
import { Mission } from "../models/mission";
import { MISSIONLIST } from '../models/mock-heroes';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missionlist = MISSIONLIST;
  selectedMission?: Mission;

  constructor() { }

  ngOnInit() {
  }

  onSelect(mission: Mission): void {
    this.selectedMission = mission;
  }
}
