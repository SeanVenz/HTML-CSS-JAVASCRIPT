//api interaction

//api key from accuweather
// const key = '0GZi39OF9hJOet11kHsOqba9NYggRPWP';
// //get city info
// const getCity = async (city) => {

//     const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(url+query);
//     const data = await response.json();

//     return data[0];

// };

// //get weather information from city
// const getWeather = async (cityId) => {

//     const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${cityId}?apikey=${key}`;

//     const response = await fetch(url+query);
//     const data = await response.json();

//     return data[0];

// };

//TRANSFORM INTO A CLASS
class Forecast{
    constructor(){
        this.key = '0GZi39OF9hJOet11kHsOqba9NYggRPWP';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        
        return {
            cityDetails: cityDetails,
            weather: weather
        };
    }

    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI+query);
        const data = await response.json();

        return data[0];
    }

    async getWeather(cityId){

        const query = `${cityId}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI+query);
        const data = await response.json();

        return data[0];
    }
}