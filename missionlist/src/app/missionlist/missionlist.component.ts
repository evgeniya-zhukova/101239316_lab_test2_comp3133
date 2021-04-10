import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionListComponent implements OnInit {

  missionList: Mission[];

  constructor(private spacexapiService: SpacexapiService) { }

  ngOnInit() {
    this.getMissions();
  }

  getMissions(): void {
    this.spacexapiService.getMissions()
      .subscribe(missionList => this.missionList = missionList);
  }
}
