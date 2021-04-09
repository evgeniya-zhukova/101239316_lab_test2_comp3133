import { Component, OnInit } from '@angular/core';
import { Mission } from "../models/mission";

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  mission: Mission = {
    mission_name: "Evgeniya",
    launch_year: 2555,
    details: "Sucessful",
    mission_patch_small: "photo"
  };
  constructor() { }

  ngOnInit(): void {
  }
}

