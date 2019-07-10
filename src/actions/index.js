import axios from 'axios';
import {GET_COUNTRIES} from './types'
 
export const fetchCountries = async ()=>{
    return async (dispatch)=>{
      const res = await axios.get("https://restcountries.eu/rest/v2/all");

            dispatch({type: GET_COUNTRIES, payload:res.data})
    

    })
}