import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  selectedMission?: Mission;
  missionlist: Mission[] = [];

  constructor(private spacexapiService: SpacexapiService) { }

  ngOnInit() {
    this.getMissions();
  }

  onSelect(mission: Mission): void {
    this.selectedMission = mission;
  }

  getMissions(): void {
    this.spacexapiService.getMissions()
      .subscribe(missionlist => this.missionlist = missionlist);
  }
}
