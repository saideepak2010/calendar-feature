import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SaideepakComponent } from './saideepak/saideepak.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SaideepakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
