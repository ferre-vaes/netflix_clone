import {
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_POPULAR_FAIL
} from '../constants/movieConstants'

const movieListReducer = ( state, action) => {
  switch(action.type) {
    case MOVIE_POPULAR_REQUEST:
      return { 
        loading: true,
        [action.key]: []
      }
    case MOVIE_POPULAR_SUCCESS:
      return { 
        loading: false, 
        [action.key]: action.payload, 
      }
    case MOVIE_POPULAR_FAIL: 
      return { loading: false, error: action.payload }
    default: 
      return state
  }
}

export const moviesListMapReducer = (state = {}, action) => {
  switch(action.type) {
      case MOVIE_POPULAR_REQUEST:
        return {
          ...state,
          [action.name] : movieListReducer(state[action.name], action)
        };
      case MOVIE_POPULAR_SUCCESS:
        return {
          ...state,
          [action.name] : movieListReducer(state[action.name], action)
        };
      case MOVIE_POPULAR_FAIL:
        return {
          ...state,
          [action.name] : movieListReducer(state[action.name], action)
        };
      default:
          return state;
  }
}