export default {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          "status": 200,
          "holidays": [{
            "name": "Independence Day",
            "date": "2017-09-15",
            "observed": "2017-09-14",
            "public": true,
          }]
        })
      }, 500);
    })
  }
}
