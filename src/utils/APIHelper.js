import citiesData from '../constants/cities.json';


 const APIHelper = {
    apiKey:  process.env.REACT_APP_API_KEY,
    apiUrl: `https://api.openweathermap.org/data/2.5/group?id=${citiesData.List.map(city => city.CityCode).join(',')}&units=metric&appid=`,
  
     async fetchWeatherData() {

         try {
            
            const apiUrlWithKey = `${this.apiUrl}${this.apiKey}`;
            const response = await fetch(apiUrlWithKey);
            const data = await response.json();
            
             return data.list;
         } catch (error) {
             console.error("Error fetching data:", error);

             throw new Error("An error occurred while fetching data.");
         }
     }
     //async fetchCityData ()
 };

 export default APIHelper;
