import $ from 'jquery'
import datepicker from 'bootstrap-datepicker'

import './css/normalize.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css'
import './css/styles.css';

// Attach datepicker to start date input so it's easier for users
// to input date values
const now = new Date();

$('#startDate').val(now.toLocaleDateString('en-US'))
               .datepicker();

$('#calendar').datepicker().hide();

// Form submission
$('input[type="submit"]').on('click', (e) => {
  e.preventDefault();

  const startDate = $('#startDate').val();
  const numDays = $('#numberDays').val();

  $('#calendar').datepicker('setStartDate', startDate)
                .datepicker('setEndDate', `+${numDays}d`)
                .show();
})
