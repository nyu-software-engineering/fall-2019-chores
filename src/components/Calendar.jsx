import React, { Component } from 'react';
import moment from 'moment';
import { range } from 'moment-range';
// import './calendar.css';

class Calendar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         allmonths: moment.months(),
         date: moment(),
         selectedDay: null,
         showCalendarTable: true,
         showMonthTable: false,
         showYearNav: false,
      };
   }

   weekdayshort = moment.weekdaysShort();

   currentDay = () => {
      return this.state.date.format('D');
   };

   month = () => {
      return this.state.date.format('MMMM');
   };

   daysInMonth = () => {
      return this.state.date.daysInMonth();
   };

   firstDayOfMonth = () => {
      let date = this.state.date;
      let firstDay = moment(date)
         .startOf('month')
         .format('d'); // Day of week 0...1..5...6

      return firstDay;
   };

   showMonth = (e, month) => {
      this.setState({
         showMonthTable: !this.state.showMonthTable,
         showCalendarTable: !this.state.showCalendarTable,
      });
   };

   setMonth = month => {
      let monthNo = this.state.allmonths.indexOf(month);
      let date = Object.assign({}, this.state.date);
      date = moment(date).set('month', monthNo);
      this.setState({
         date: date,
         showMonthTable: !this.state.showMonthTable,
         showCalendarTable: !this.state.showCalendarTable,
      });
   };

   MonthList = props => {
      let months = [];
      props.data.map(data => {
         months.push(
            <td
               key={data}
               className="calendar-month"
               onClick={e => {
                  this.setMonth(data);
               }}
            >
               <span>{data}</span>
            </td>
         );
      });
      let rows = [];
      let cells = [];

      months.forEach((row, i) => {
         if (i % 3 !== 0 || i == 0) {
            cells.push(row);
         } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
         }
      });
      rows.push(cells);
      let monthlist = rows.map((d, i) => {
         return <tr>{d}</tr>;
      });

      return (
         <table className="calendar-month">
            <thead>
               <tr>
                  <th colSpan="4">Select a Month</th>
               </tr>
            </thead>
            <tbody>{monthlist}</tbody>
         </table>
      );
   };

   onPrev = () => {
      let curr = '';
      if (this.state.showMonthTable === true) {
         curr = 'year';
      } else {
         curr = 'month';
      }
      this.setState({
         date: this.state.date.subtract(1, curr),
      });
   };

   onNext = () => {
      let curr = '';
      if (this.state.showMonthTable === true) {
         curr = 'year';
      } else {
         curr = 'month';
      }
      this.setState({
         date: this.state.date.add(1, curr),
      });
   };

   setYear = year => {
      // alert(year)
      let date = Object.assign({}, this.state.date);
      date = moment(date).set('year', year);
      this.setState({
         date: date,
         showMonthTable: !this.state.showMonthTable,
         showYearNav: !this.state.showYearNav,
         showMonthTable: !this.state.showMonthTable,
      });
   };

   onYearChange = e => {
      this.setYear(e.target.value);
   };

   showYearEditor = () => {
      this.setState({
         showYearNav: true,
         showCalendarTable: !this.state.showCalendarTable,
      });
   };

   year = () => {
      return this.state.date.format('Y');
   };

   YearTable = props => {
      let months = [];
      let nextten = moment()
         .set('year', props)
         .add('year', 12)
         .format('Y');

      this.getDates(props, nextten).map(data => {
         months.push(
            <td
               key={data}
               className="calendar-month"
               onClick={e => {
                  this.setYear(data);
               }}
            >
               <span>{data}</span>
            </td>
         );
      });
      let rows = [];
      let cells = [];

      months.forEach((row, i) => {
         if (i % 3 !== 0 || i == 0) {
            cells.push(row);
         } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
         }
      });
      rows.push(cells);
      let yearlist = rows.map((d, i) => {
         return <tr>{d}</tr>;
      });

      return (
         <table className="calendar-month">
            <thead>
               <tr>
                  <th colSpan="4">Select a Year</th>
               </tr>
            </thead>
            <tbody>{yearlist}</tbody>
         </table>
      );
   };

   getDates(startDate, stopDate) {
      var dateArray = [];
      var currentDate = moment(startDate);
      var stopDate = moment(stopDate);
      while (currentDate <= stopDate) {
         dateArray.push(moment(currentDate).format('YYYY'));
         currentDate = moment(currentDate).add(1, 'year');
      }
      return dateArray;
   }

   render() {
      let blanks = [];
      for (let i = 0; i < this.firstDayOfMonth(); i++) {
         blanks.push(<td className="calendar-day empty">{''}</td>);
      }

      let daysInMonth = [];
      for (let d = 1; d <= this.daysInMonth(); d++) {
         let currentDay = d == this.currentDay() ? 'today' : '';
         // let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
         daysInMonth.push(
            <td key={d} className={`calendar-day ${currentDay}`}>
               <span
                  onClick={e => {
                     this.onDayClick(e => {
                        this.setState({ selectedDay: d });
                     });
                  }}
               >
                  {d}
               </span>
            </td>
         );
      }

      var totalSlots = [...blanks, ...daysInMonth];
      let rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
         if (i % 7 !== 0) {
            cells.push(row);
         } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
         }
         if (i === totalSlots.length - 1) {
            // let insertRow = cells.slice();
            rows.push(cells);
         }
      });

      return (
         <div className="tail-datetime-calendar">
            <div className="calendar-navi">
               <span
                  onClick={e => {
                     this.onPrev();
                  }}
                  className="calendar-button button-prev"
               />
               {!this.state.showMonthTable && !this.state.showYearEditor && (
                  <span
                     onClick={e => {
                        this.showMonth();
                     }}
                     className="calendar-label"
                  >
                     {this.month()}
                  </span>
               )}
               <span
                  className="calendar-label"
                  onClick={e => {
                     this.showYearEditor();
                  }}
               >
                  {this.year()}
               </span>

               <span
                  onClick={e => {
                     this.onNext();
                  }}
                  className="calendar-button button-next"
               />
            </div>
            <div className="calendar-date">
               {this.state.showYearNav && (
                  <this.YearTable props={this.year()} />
               )}
               {this.state.showMonthTable && (
                  <this.MonthList data={moment.months()} />
               )}
            </div>

            {this.state.showCalendarTable && (
               <div className="calendar-date">
                  <table className="calendar-day">
                     <thead>
                        <tr>
                           {this.weekdayshort.map(day => {
                              return <th key={day}>{day}</th>;
                           })}
                        </tr>
                     </thead>
                     <tbody>
                        {rows.map((d, i) => {
                           return <tr>{d}</tr>;
                        })}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      );
   }
}

export default Calendar;
