//   API key 7269431df9a1ea794e395e90f530febd

// declare variables
let zip = '';
const btn = document.getElementById('btn');
const button1 = document.getElementById('button1');
const apiLink = 'https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=7269431df9a1ea794e395e90f530febd';
const error = document.getElementById('error');
const city = document.getElementById('city');
const weatherHere = document.getElementById('weatherHere');
const temp = document.getElementById('temp');
const tempC = document.getElementById('tempC');
const tempF = document.getElementById('tempF');
const otherInfo = document.getElementById('otherInfo');
const zipInput = document.getElementById('zipInput')
const conditions = document.getElementById('conditions');


// on click, call api
button1.addEventListener('click', apiCall)
// on "return" pressed, act as though button clicked
zipInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        button1.click();
    }
})

// function to call api via axios and write to html
// Make a request to api
function apiCall() {
    // replace text in zip with input value
    zip = zipInput.value;
    // call function, replacing '40509' in apiLink with zip
    axios.get(apiLink.replace('40509', zip))
        .then(function (response) {
            // handle success
            console.log(response);
            console.log(response.data.main.temp)
            error.style.display = 'none';
            weatherHere.style.display = 'block';
            city.innerHTML = response.data.name;
            temp.innerHTML = Math.round(response.data.main.temp) + 'K';
            tempC.innerHTML = (Math.round(response.data.main.temp - 273.15)) + '°C';
            tempF.innerHTML = (Math.round(response.data.main.temp - 273.15) * 9 / 5 + 32) + '°F';
            conditions.innerHTML = response.data.weather[0].main;
            imageChoice(response.data.main.temp);
        })
        .catch(function (error) {
            zipNotFound();
            console.log(error);
        })
}

function zipNotFound() {
    error.style.display = 'block';
    error.innerHTML = 'Please enter a valid Zip code.';
    document.getElementById('weatherHere').style.display = 'none';
}

function imageChoice(temp) {
    if (temp >= 297) {
        otherInfo.src = './img/image1.jpeg';
    } else if (temp < 297 && temp >= 281) {
        otherInfo.src = 'img/image2.png';
    } else if (temp <= 280) {
        otherInfo.src = 'img/image3.jpeg';
        }
}

