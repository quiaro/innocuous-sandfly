import $ from 'jquery'

export default {
  get(country, year) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'https://holidayapi.com/v1/holidays',
        data: {
          key: '8693d87c-c92d-43f5-899d-50d3488bcbbe',
          country: country,
          year: year,
        },
        crossDomain: true,
        dataType: 'json',
        statusCode: {
          402: function() {
            console.log('Cross-domain error');
          }
        },
        success: function(response) {
          console.log('success: ', response);
          resolve(response);
        },
        fail: function(err) {
          console.log('error: ', err);
          reject(err);
        }
      })
    })
  }
}
