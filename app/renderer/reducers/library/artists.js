import { ADD_LIBRARY_TRACKS } from './../../actions/actionTypes'

const artists = (state = [], action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACKS: {
      let filteredArtists = action.tracks.map(track => track.artist)
      filteredArtists = [...new Set(filteredArtists)]
      return [...state, ...filteredArtists.filter(artist => !state.includes(artist))]
    }
    default:
      return state
  }
}

export default artists
