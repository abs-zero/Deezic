import { connect } from 'react-redux'
import Tracks from './../../presentational/pages/library/Tracks'
import { humanizeSeconds } from './../../utils/time'
import { togglePlayById } from './../../actions/thunks/player'
import { getAllTracks } from '../../selectors/library'

const mapStateToProps = (state) => {
  const tracks = getAllTracks(state)
  return {
    tracks: getUITracks(tracks),
    currentSongId: state.player.currentSong.id,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = (dispatch) => ({
  handlePlayPause: id => dispatch(togglePlayById(id))
})

const TracksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks)

export default TracksContainer

const getUITracks = (tracks) => {
  return tracks.map(track => ({
    id: track.id,
    song: track.title,
    artist: track.artist,
    album: track.album,
    time: humanizeSeconds(track.length)
  }))
}
