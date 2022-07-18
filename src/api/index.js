import axios from 'axios';

const URL= '';

export const getPlacesData = async (sw, ne, type) => {

    const options = {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          limit: '30',
          currency: 'USD',
          lunit: 'km',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };


    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,options);
        return data;
    } catch(error){
        if(error.response.status === 429){
           window.alert('API request limit reached')
          }

    }
}