const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=7269431df9a1ea794e395e90f530febd')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

//   API key 7269431df9a1ea794e395e90f530febd