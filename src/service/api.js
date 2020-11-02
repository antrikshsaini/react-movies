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

  export const getTVshows = async category => {
    const url = `${BASE_URL}/tv/${category}?api_key=${APP_KEY}`
    try {
  
      const res = await axios.get(url)
      const tvShows = res.data.results
  
      return tvShows
    } catch (err) {
      throw err
    } 
  }

  export const getResults = async (searchType,searchName) => {
    const url = `${BASE_URL}/search/${searchType}?api_key=${APP_KEY}&query=${searchName}`
    try {
  
      const res = await axios.get(url)
      const results = res.data.results
  
      return results
    } catch (err) {
      throw err
    } 
  }