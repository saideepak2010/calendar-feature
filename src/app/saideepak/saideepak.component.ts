import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saideepak',
  templateUrl: './saideepak.component.html',
  styleUrls: ['./saideepak.component.scss']
})
export class SaideepakComponent implements OnInit {
  getMonth = new Date("2/5/2020"); //"01/27/2020"
  getAllMonths = [];
  totalWeek;
  currentWeek;
  events = [];
  constructor() { }

  ngOnInit() {
    this.currentWeek = this.getWeekStartWeekEnd(this.getMonth);
    this.totalWeek = this.appendWeekDates(this.currentWeek['startDate'],this.currentWeek['endDate']);
    this.events = ([
      {
        "events":"dummy",
        "days" : ["eventActive","eventActive","eventActive","eventActive","eventActive last","",""],
        "subElements":[
          {
            "events":"dummy1",
            "days" : ["eventActive","eventActive last","","","","",""]
          },
          {
            "events":"dummy2",
            "days" : ["","eventActive","eventActive","eventActive","eventActive last","","",]
          },
          {
            "events":"dummy3",
            "days" : ["","","eventActive","eventActive","eventActive","eventActive last",""]
          }
        ]
      },
      {
        "events":"record",
        "days" : ["","", "eventActive","eventActive","eventActive","eventActive last",""]
      },
      {
        "events":"break",
        "days" : ["","","eventActive","eventActive","eventActive last","",""]
      },
      {
        "events":"sample",
        "days" : ["","","eventActive","eventActive last","","",""]
      }
    ])
    console.log(this.totalWeek['weekDays']);
  }

  getWeekStartWeekEnd(d) {
    d = new Date(d);
    var startEndDate = [];
    var day = d.getDay(),
        
        diff = d.getDate() - day + (day == 0 ? -6:1);
        startEndDate['startDate'] = new Date(d.setDate(diff));
        
        var WeekLast = startEndDate['startDate'].getDate() + 6; // adjust when day is Sunday
        
        startEndDate['endDate'] = new Date(d.setDate(WeekLast));
    return startEndDate;
  }
  appendWeekDates(fromDate,toDate){
    var daysOfYear = [];
    daysOfYear["year"] = new Date(fromDate).getFullYear();
    var appendDates = [];
    for (var d = fromDate; d <= toDate; d.setDate(d.getDate() + 1)) {
      appendDates.push({
        "day": this.getDayName(new Date(d).getDay())['halfName'],
        "date": new Date(d).getDate(),
        "fullDate": this.getDateFormat(d)
      })
    }
    daysOfYear["weekDays"] = appendDates;
    return daysOfYear;
  }

  getDayName(dayNumber){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dayNumber);
    var dayName = [];
    dayName['fullName'] = days[dayNumber];
    dayName['halfName'] = days[dayNumber].substring(0, 3);
    dayName['letter'] = days[dayNumber].substring(0, 1);
    return dayName;
  }

  getDateFormat(d){
    var returnDateFromat = ("0" + (new Date(d).getMonth() + 1)).slice(-2)+"/"+("0" + new Date(d).getDate()).slice(-2) +"/"+new Date(d).getFullYear()
    return returnDateFromat;
  }

  toggleSubElements(){
    
  }
}
