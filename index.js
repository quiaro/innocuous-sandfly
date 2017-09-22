import $ from 'jquery'
import datepicker from 'bootstrap-datepicker'
import holidays from './js/holidays'

import './css/normalize.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css'
import './css/styles.css';

function dateStringToDate(dateString) {
  const [year, month, day] = dateString.split("-")
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US');
}

// Attach datepicker to start date input so it's easier for users
// to input date values
const now = new Date();
let holidayList = [];

$('#startDate').val(now.toLocaleDateString('en-US'))
               .datepicker();

$('#calendar').datepicker({
  daysOfWeekHighlighted: [0,6],
  beforeShowDay: (date) => {
    const currentDate = date.toLocaleDateString('en-US');
    if (holidayList.indexOf(currentDate) >= 0) {
      return {
        classes: 'holiday'
      }
    }
  }
}).hide();

// Form submission
$('input[type="submit"]').on('click', (e) => {
  e.preventDefault();

  const startDate = $('#startDate').val();
  const numDays = $('#numberDays').val();
  const countryCode = $('#countryCode').val();
  const year = 2008;

  $('#calendar').datepicker('setStartDate', startDate)
                .datepicker('setEndDate', `+${numDays}d`)
                .show();

  // Get list of holidays
  holidays.get(countryCode, year).then(response => {
    // After updating the list of holidays, refresh the calendar
    holidayList = Object.keys(response.holidays).map(holiday => dateStringToDate(holiday));
    $('#calendar').datepicker('update');
  });

})
