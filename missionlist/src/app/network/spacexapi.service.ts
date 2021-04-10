import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mission } from '../models/mission';
import { MISSIONLIST } from '../models/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor() { }

  getMissions(): Observable<Mission[]> {
    const missionList = of(MISSIONLIST);
    return missionList;
  }

  getMission(id: number): Observable<Mission> {
    const mission = MISSIONLIST.find(h => h.launch_year === id) as Mission;
    return of(mission);
  }
}
