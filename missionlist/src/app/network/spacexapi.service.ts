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
    const missionlist = of(MISSIONLIST);
    return missionlist;
  }
}






