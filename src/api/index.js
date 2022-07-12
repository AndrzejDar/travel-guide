import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw,ne) => {

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
          'X-RapidAPI-Key': '1d948481c8msh0f1f9dbf326e150p1a4a77jsn21b071b522e7',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };


    try{
        const {data: {data}} = await axios.get(URL,options);
        return data;
    } catch(error){
        console.log(error);

    }
}