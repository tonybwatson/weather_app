//   API key 7269431df9a1ea794e395e90f530febd

// variable for inputting zipcode to api url
var zip = '';

var btn = document.getElementById('btn');
var button1 = document.getElementById('button1')
var apiLink = 'https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=7269431df9a1ea794e395e90f530febd'

// on click, call api
button1.addEventListener('click', apiCall)
// on "return" pressed, act as though button clicked
zipInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        button1.click();
    }
})

// function to call api via axios and write to html
// Make a request to api
function apiCall() {
    // replace text in zip with input value
    zip = document.getElementById('zipInput').value;
    // call function, replacing '40509' in apiLink with zip
    axios.get(apiLink.replace('40509', zip))
        .then(function (response) {
            // handle success
            console.log(response);
            console.log(response.data.main.temp)
            document.getElementById('error').style.display = 'none';
            document.getElementById('weatherHere').style.display = 'block';
            document.getElementById('city').innerHTML = response.data.name;
            document.getElementById('temp').innerHTML = Math.round(response.data.main.temp) + 'K';
            document.getElementById('tempC').innerHTML = (Math.round(response.data.main.temp - 273.15)) + '°C';
            document.getElementById('tempF').innerHTML = (Math.round(response.data.main.temp - 273.15) * 9 / 5 + 32) + '°F';
            document.getElementById('conditions').innerHTML = response.data.weather[0].main;
        })
        .catch(function (error) {
            zipNotFound();
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function zipNotFound() {
    document.getElementById('error').style.display = 'block';
    document.getElementById('error').innerHTML = 'Please enter a valid Zip code.';
    document.getElementById('weatherHere').style.display = 'none';
}