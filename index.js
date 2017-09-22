import $ from 'jquery'
import datepicker from 'bootstrap-datepicker'
import holidays from './js/holidays'

import './css/normalize.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css'
import './css/styles.css';

// Attach datepicker to start date input so it's easier for users
// to input date values
const now = new Date();

$('#startDate').val(now.toLocaleDateString('en-US'))
               .datepicker();

$('#calendar').datepicker({
  'daysOfWeekHighlighted': [0,6]
}).hide();

// Form submission
$('input[type="submit"]').on('click', (e) => {
  e.preventDefault();

  const startDate = $('#startDate').val();
  const numDays = $('#numberDays').val();

  $('#calendar').datepicker('setStartDate', startDate)
                .datepicker('setEndDate', `+${numDays}d`)
                .show();

  // Get list of holidays
  holidays.get().then(response => {
    const holidayList = response.holidays.map(holiday => holiday.date);
    console.log('holidays: ', holidayList);
  });

})
