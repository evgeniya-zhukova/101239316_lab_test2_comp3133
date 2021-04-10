import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissionDetailsComponent implements OnInit {
  mission: Mission;

  constructor(
    private route: ActivatedRoute,
    private spacexapiService: SpacexapiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMission();
  }

  getMission(): void {
    const flight_number = +this.route.snapshot.paramMap.get('flight_number');
    this.spacexapiService.getMission(flight_number)
      .subscribe(mission => this.mission = mission);
  }

  goBack(): void {
    this.location.back();
  }
}
