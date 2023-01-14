//api interaction

//api key from accuweather
const key = '0GZi39OF9hJOet11kHsOqba9NYggRPWP';
//get city info
const getCity = async (city) => {

    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(url+query);
    const data = await response.json();

    return data[0];

};

//get weather information from city
const getWeather = async (cityId) => {

    const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityId}?apikey=${key}`;

    const response = await fetch(url+query);
    const data = await response.json();

    return data[0];

};
    