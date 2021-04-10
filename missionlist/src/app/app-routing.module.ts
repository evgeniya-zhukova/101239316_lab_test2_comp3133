import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionListComponent } from './missionlist/missionlist.component';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/missionList', pathMatch: 'full' },
  { path: 'detail/:id', component: MissionDetailsComponent },
  { path: 'missionList', component: MissionListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
