import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { SaideepakComponent } from './saideepak/saideepak.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },  
  { path: 'saideepak', component: SaideepakComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
