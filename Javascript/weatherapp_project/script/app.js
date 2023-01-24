//DOM manipulation

//get user city from index
const userCity = document.querySelector('form');

//get reference to update stuff in index html
const card = document.querySelector('.card');
const details = document.querySelector('.details');

//update icon
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//use class
const forecast = new Forecast();
console.log(forecast);

//update UI
const updateUI = (data) => {

    // const cityDets = data.cityDetails;
    // const weather = data.weather;

    //destructure properties
    const {cityDetails, weather} = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //update night and day 

    //ternary
    let timeSource = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    // let timeSource = null;
    // if(weather.IsDayTime){
    //     timeSource = 'img/day.svg';
    // }else{
    //     timeSource = 'img/night.svg'
    // }
    time.setAttribute('src', timeSource)

    //update icon
    const iconSource = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSource);

    //remove d-none class if present so it does not show the first time
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

userCity.addEventListener('submit', (e) => {
    // prevent default action
    e.preventDefault();

    //get city value and remove unneccessary white spaces
    const city = userCity.city.value.trim();
    userCity.reset();

    //update UI with city request
    forecast.updateCity(city)
        .then(data => {
            updateUI(data);
        })
        .catch(error =>{
            console.log(error);
        });

    //set local storage
    localStorage.setItem('city', city);
});

//check if something exist in local storage
if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => {
            updateUI(data);
        })
        .catch(error => {
            console.log(error);
        });
};

