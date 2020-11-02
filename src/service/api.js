import axios from 'axios'

import { APP_KEY, BASE_URL } from '../config/api-config'




export const getMovies = async category => {


    const url = `${BASE_URL}/movie/${category}?api_key=${APP_KEY}`
    try {
  
      const res = await axios.get(url)
      const movies = res.data.results
  
      return movies
    } catch (err) {
      throw err
    } 
  }