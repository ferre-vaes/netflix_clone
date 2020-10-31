import {
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_POPULAR_FAIL
} from '../constants/movieConstants'
import axios from 'axios'

export const listMovies = (url, name) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_POPULAR_REQUEST
    })
    
    console.log(url)
    const { data } = await axios.get(url)
    console.log(data)

    dispatch({
      type: MOVIE_POPULAR_SUCCESS,
      key: name,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MOVIE_POPULAR_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}