import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saideepak',
  templateUrl: './saideepak.component.html',
  styleUrls: ['./saideepak.component.scss']
})
export class SaideepakComponent implements OnInit {
  getCurrentDate = new Date();
  getMonth = this.getCurrentDate; //"01/27/2020"
  getYear = this.getCurrentDate;
  getWeek = this.getCurrentDate;
  getMonthStart = "";
  getAllMonths = [];
  totalWeek;
  currentWeek;
  currentWeekNav = "";
  weeklyEvents = [];
  monthlyEvents = [];
  yearlyEvents = [];
  monthDays=[];
  monthDates=[];
  getMonthNameTxt = "";
  currentYear = "";
  currentYearAllMonths = [];
  initalSubClass: any = [];
  calendarView = 1;
  constructor() { }

  ngOnInit() {
    
    this.passMonthYear(new Date(this.getYear).getFullYear());
    this.weeklyCalendarLoad(this.getWeek);
    this.getFullMonth(this.getMonth);
    // console.log(this.appendWeekDates(new Date("02/01/2020"),new Date("02/29/2020")));
    // console.log(this.checkActive("01/27/2020","02/04/2020","01/28/2020"));
    this.weeklyEvents = ([
      {
        "calendarEvents":
        [
          {
            "calendarName": "calendar1",
            "eventsList": [
              {
                "events":"dummy",
                "startDate" : "01/28/2020",
                "endDate": "02/05/2020",
                "subElements":[
                  {
                    "events":"dummy1",
                    "startDate" : "01/27/2020",
                    "endDate": "01/29/2020"
                  },
                  {
                    "events":"dummy2",
                    "startDate" : "01/28/2020",
                    "endDate": "01/29/2020"
                  },
                  {
                    "events":"dummy3",
                    "startDate" : "01/28/2020",
                    "endDate": "01/30/2020"
                  }
                ]
              },
              {
                "events":"record",
                "startDate" : "01/27/2020",
                "endDate": "02/02/2020",
                "subElements":[
                  {
                    "events":"dummy1",
                    "startDate" : "01/27/2020",
                    "endDate": "02/10/2020"
                  },
                  {
                    "events":"dummy2",
                    "startDate" : "01/27/2020",
                    "endDate": "02/10/2020"
                  },
                  {
                    "events":"dummy3",
                    "startDate" : "01/27/2020",
                    "endDate": "02/10/2020"
                  }
                ]
              }
            ]
          },
          {
            "calendarName": "calendar2",
            "eventsList": [{
              "events":"break",
              "startDate" : "27/01/2020",
              "endDate": "02/05/2020",
              "subElements":[
                {
                  "events":"dummy1",
                  "startDate" : "27/01/2020",
                  "endDate": "02/02/2020"
                },
                {
                  "events":"dummy2",
                  "startDate" : "27/01/2020",
                  "endDate": "02/02/2020"
                },
                {
                  "events":"dummy3",
                  "startDate" : "27/01/2020",
                  "endDate": "02/02/2020"
                }
              ]
            },
            {
              "events":"sample",
              "startDate" : "27/01/2020",
              "endDate": "02/02/2020"
            }]
          }
        ]
      }
    ])
    
    this.monthlyEvents = ([
      {
        "calendarEvents":
        [
          {
            "calendarName": "calendar1",
            "eventsList": [
              {
                "events":"dummy",
                "startDate" : "01/28/2020",
                "endDate": "02/29/2020",
                "subElements":[
                  {
                    "events":"dummy1",
                    "startDate" : "01/31/2020",
                    "endDate": "02/27/2020"
                  },
                  {
                    "events":"dummy2",
                    "startDate" : "01/28/2020",
                    "endDate": "01/29/2020"
                  },
                  {
                    "events":"dummy3",
                    "startDate" : "01/28/2020",
                    "endDate": "01/30/2020"
                  }
                ]
              },
              {
                "events":"record",
                "startDate" : "01/27/2020",
                "endDate": "02/02/2020",
                "subElements":[
                  {
                    "events":"dummy1",
                    "startDate" : "01/27/2020",
                    "endDate": "02/10/2020"
                  },
                  {
                    "events":"dummy2",
                    "startDate" : "01/27/2020",
                    "endDate": "02/10/2020"
                  },
                  {
                    "events":"dummy3",
                    "startDate" : "01/27/2020",
                    "endDate": "02/10/2020"
                  }
                ]
              }
            ]
          },
          {
            "calendarName": "calendar2",
            "eventsList": [{
              "events":"break",
              "startDate" : "27/01/2020",
              "endDate": "02/05/2020",
              "subElements":[
                {
                  "events":"dummy1",
                  "startDate" : "27/01/2020",
                  "endDate": "02/02/2020"
                },
                {
                  "events":"dummy2",
                  "startDate" : "27/01/2020",
                  "endDate": "02/02/2020"
                },
                {
                  "events":"dummy3",
                  "startDate" : "27/01/2020",
                  "endDate": "02/02/2020"
                }
              ]
            },
            {
              "events":"sample",
              "startDate" : "27/01/2020",
              "endDate": "02/02/2020"
            }]
          }
        ]
      }
    ])
    this.yearlyEvents = ([
      {
        "events":"dummy",
        "startDate" : "01/22/2020",
        "endDate": "02/02/2020",
        "subElements":[
          {
            "events":"dummy1",
            "startDate" : "01/27/2020",
            "endDate": "01/29/2020"
          },
          {
            "events":"dummy2",
            "startDate" : "01/28/2020",
            "endDate": "01/29/2020"
          },
          {
            "events":"dummy3",
            "startDate" : "01/28/2020",
            "endDate": "01/30/2020"
          }
        ]
      },
      {
        "events":"record",
        "startDate" : "01/27/2020",
        "endDate": "02/29/2020",
        "subElements":[
          {
            "events":"dummy1",
            "startDate" : "01/27/2020",
            "endDate": "02/02/2020"
          },
          {
            "events":"dummy2",
            "startDate" : "01/27/2020",
            "endDate": "05/05/2020"
          },
          {
            "events":"dummy3",
            "startDate" : "01/27/2020",
            "endDate": "02/10/2020"
          }
        ]
      },
      {
        "events":"break",
        "startDate" : "27/01/2020",
        "endDate": "02/02/2020"
      },
      {
        "events":"sample",
        "startDate" : "27/01/2020",
        "endDate": "02/02/2020"
      }
    ])
  }

  startDateEndDate(start,end,monthNumber,monthYear){
    // console.log(start);
    // console.log(end);
    // console.log(monthNumber);
    // console.log(monthYear);
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
  checkActive(startDate,endDate,dateCheck){
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    var returnValue = false;
    var arrayDates = this.appendWeekDates(startDate,endDate);
    arrayDates['weekDays'].find(item => {
      if(item['fullDate'] == dateCheck)
      {
        returnValue = true;
      }
    })
    return returnValue;
  }
  getFullMonth(currentMonth){
    //this.getMonth.getDay() //this.getMonth.getDate()//this.getMonth.getFullYear()
    this.getMonthStart = this.spliceMonth(currentMonth.getMonth())+"/01/"+currentMonth.getFullYear();
    var allMonths = this.getDaysInMonth(currentMonth.getMonth(),currentMonth.getFullYear());
    this.getMonthNameTxt = this.getMonthName(new Date(this.spliceMonth(currentMonth.getMonth())+"/01/"+currentMonth.getFullYear()).getMonth())['fullName'] + " " +new Date(this.spliceMonth(currentMonth.getMonth())+"/01/"+currentMonth.getFullYear()).getFullYear();
    this.getAllMonths = allMonths;
  }

  getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    var daysName = [];
    var daysList = [];
    var fullDate = [];
    while (date.getMonth() === month) {
      days.push(this.appendZero((new Date(date)).getDate()));
      daysName.push(this.getDayName(date.getDay())['halfName']);
      fullDate.push(this.spliceMonth(month) + "/" + this.appendZero((new Date(date)).getDate()) + "/" + year);
      date.setDate(date.getDate() + 1);
    }
    daysList['fullDate'] = fullDate;
    daysList['days'] = days;
    daysList['daysName'] = daysName;
    return daysList;
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

  passMonthYear(year){
    this.currentYear = year;
    var getArray = [];
    for(let i=0;i<=11;i++){
      getArray.push(
        {
          monthNumber: i,
          monthYear: year,
          monthFullName: this.getMonthName(i)['fullName'],
          monthHalfName: this.getMonthName(i)['halfName'],
          monthLetter: this.getMonthName(i)['letter'],
          weeks: this.getWeeksYear(year, i)['totalArray'],
          weeksList: this.getWeeksYear(year, i)['totalWeeksArray'],
          calendarWeeks: this.getWeeksStartAndEndInMonth(year, i)
        }
      );
    }
    this.currentYearAllMonths = getArray;
  }

  loopWeeks(weekStart,weekEnd){
    var weekLoad = [];
    // for()
  }
  getWeeksYear(year: number, month: number){
    month = month+1;
    var getTotalWeeks = new Date(year, month, 0).getDate();
    var totalArray = [];
    var totalWeeksArray = [];
    var returnArray = [];
    var totalWeeks = Math.ceil(getTotalWeeks/7);
    var startDay = 0;
    for(let i=1;i<=totalWeeks;i++){
      var lastDay = startDay+7;
      if(i==totalWeeks){
        lastDay = getTotalWeeks;
      }
      totalWeeksArray.push({
        'start': this.appendZero(month)+"/"+this.appendZero(startDay+1)+"/"+year,
        'end': this.appendZero(month)+"/"+this.appendZero(lastDay)+"/"+year
      })
      var newArray = [];
      for(let n=startDay+1;n<=lastDay;n++){
        newArray.push(this.appendZero(month)+"/"+this.appendZero(n)+"/"+year)
      }
      totalArray.push(newArray);
      startDay = i*7;
    }
    returnArray['totalArray'] = totalArray;
    returnArray['totalWeeksArray'] = totalWeeksArray;
    return returnArray;
  }
  getWeeksStartAndEndInMonth(_year: number, _month: number, returnDate: boolean = false) {
    const lastDay = new Date(_year, _month + 1, 0);
    let weeks: Array<{start: number, end: number}> = [];
    let _days = [];
    for (let _day = 1; _day <= lastDay.getDate(); _day++){
        let _thisDay = new Date(_year, _month, _day);
        _days.push(returnDate ? _thisDay : _day);
        if(_thisDay.getDay() === 6){
            weeks.push({start: _days[0], end: _days[_days.length-1]});
            _days = [];
        }else if(_thisDay.getDate() === lastDay.getDate()){
            weeks.push({start: _days[0], end: _days[_days.length-1]});
        }
    }
    return weeks;
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

  getMonthName(month){
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];    
    var returnName = [];
    returnName['fullName'] = monthNames[month];
    returnName['halfName'] = monthNames[month].substring(0, 3);
    returnName['letter'] = monthNames[month].substring(0, 1);
    return returnName;
  }
  getDateFormat(d){
    var returnDateFromat = this.spliceMonth(new Date(d).getMonth())+"/"+this.appendZero(new Date(d).getDate()) +"/"+new Date(d).getFullYear()
    return returnDateFromat;
  }
  gotoYear(dir){
    var newYear = new Date(this.getYear).getFullYear();
    if(dir == "prev"){
      var prevYear = new Date(this.getYear).getFullYear() - 1;
      newYear = prevYear;
      this.passMonthYear(prevYear);
    }
    else{      
      var nextYear = new Date(this.getYear).getFullYear() + 1;
      newYear = nextYear;
      this.passMonthYear(nextYear);
    }
    this.getYear = new Date("01/01/"+newYear);
    // this.currentWeek = this.getWeekStartWeekEnd(this.getMonth);
  }
  gotoMonth(dir){
    this.currentWeek = this.getWeekStartWeekEnd(this.getMonth);
    var getDateNew = "";
    if(dir == "prev"){
      var prevMonth = this.spliceMonth(new Date(this.getMonth).getMonth())+"/"+"01"+"/"+new Date(this.getMonth).getFullYear();
      var prevMonthTxt = new Date(prevMonth).setDate(new Date(prevMonth).getDate() - 1);
      var previousDate =this.spliceMonth(new Date(prevMonthTxt).getMonth())+"/"+new Date(prevMonthTxt).getDate()+"/"+new Date(prevMonthTxt).getFullYear();
      this.getMonth = new Date(previousDate);
      this.getFullMonth(this.getMonth);
    }
    else{
      var nextMonth = this.spliceMonth(new Date(this.getMonth).getMonth())+"/"+this.getDaysInMonth(new Date(this.getMonth).getMonth(),"2020")['daysName'].length+ "/"+new Date(this.getMonth).getFullYear(); //this.spliceMonth(new Date(this.getMonth).getMonth())
      var nextMonthTxt = new Date(nextMonth).setDate(new Date(nextMonth).getDate() + 1);
      var nextMonthDate =this.spliceMonth(new Date(nextMonthTxt).getMonth())+"/"+new Date(nextMonthTxt).getDate()+"/"+new Date(nextMonthTxt).getFullYear();
      this.getMonth = new Date(nextMonthDate);
      this.getFullMonth(this.getMonth);
    }
    // this.currentWeek = this.getWeekStartWeekEnd(this.getMonth);
  }
  gotoWeek(dir){
    console.log("qwuweu");
    this.currentWeek = this.getWeekStartWeekEnd(this.getWeek);
    var getDateNew = "";
    if(dir == "prev"){
      var previousDate = this.currentWeek['startDate'].setDate(this.currentWeek['startDate'].getDate() - 1);
      previousDate = new Date(previousDate);
      getDateNew = this.spliceMonth(previousDate.getMonth())+"/"+previousDate.getDate()+"/"+previousDate.getFullYear();
      // this.currentWeek = this.getWeekStartWeekEnd(this.getMonth);
    }
    else{
      var nextMonth = this.currentWeek['endDate'].setDate(this.currentWeek['endDate'].getDate() + 1);
      nextMonth = new Date(nextMonth);
      getDateNew = this.spliceMonth(nextMonth.getMonth())+"/"+nextMonth.getDate()+"/"+nextMonth.getFullYear();
      // this.currentWeek = this.getWeekStartWeekEnd(this.getMonth);
    }
    this.weeklyCalendarLoad(getDateNew);
  }

  weeklyCalendarLoad(monthLoad){
    this.getWeek = monthLoad;
    this.currentWeek = this.getWeekStartWeekEnd(monthLoad);
    this.currentWeekNav = this.appendZero(new Date(this.currentWeek['startDate']).getDate()) + " - " + this.appendZero(new Date(this.currentWeek['endDate']).getDate()) + " " + (this.getMonthName(new Date(this.currentWeek['endDate']).getMonth())['fullName']) + " " + (new Date(this.currentWeek['endDate']).getFullYear());
    this.totalWeek = this.appendWeekDates(this.currentWeek['startDate'],this.currentWeek['endDate']);
  }

  toggleSubElements(item,index){
    let match = this.initalSubClass.item == item && this.initalSubClass.index == index;
    this.initalSubClass = match ? {item: '', index: ''} : {item: item, index: index};
  }
  isActive(item,index){
    return this.initalSubClass.item === item && this.initalSubClass.index == index;
  }
  appendClassesEventActive(fromDate,toDate){
    
  }

  spliceMonth(month){    
    return this.appendZero((month + 1));
  }
  appendZero(numberAppend){
    return ("0" + numberAppend).slice(-2)
  }
  viewType(view,conditionCheck = null){
    if(conditionCheck!=1){
      this.calendarView = view;
    }
    var arrayReturn = [];
    if(view==1){
      arrayReturn['week'] = [1,2,3];
      arrayReturn['month'] = [4,5,6];
      arrayReturn['year'] = [7,8,9];
    }
    else if(view==2){
      arrayReturn['week'] = [7,8,9];
      arrayReturn['month'] = [1,2,3];
      arrayReturn['year'] = [4,5,6];
    }
    else if(view==3){
      arrayReturn['week'] = [7,8,9];
      arrayReturn['month'] = [4,5,6];
      arrayReturn['year'] = [1,2,3];
    }
    return arrayReturn;
  }
}
