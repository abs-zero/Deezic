import { ADD_LIBRARY_TRACKS } from './../../actions/actionTypes'
import { combineReducers } from 'redux'

export const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACKS: {
      let tracks = {}
      for (let _track of action.tracks) {
        tracks[_track.id] = track(_track)
      }
      return {...state, ...tracks}
    }

    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACKS:
      return [...state, ...action.tracks.map(track => track.id)]

    default:
      return state
  }
}

const track = (track) => {
  return {
    id: track.id,
    title: track.title,
    artist: track.artist,
    album: track.album,
    length: track.length,
    src: track.src
  }
}

export default combineReducers({
  byId,
  allIds
})
