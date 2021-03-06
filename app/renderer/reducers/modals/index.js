import { SET_MODAL } from './../../actions/actionTypes'

const currentModal = (state = null, action) => {
  switch (action.type) {
    case SET_MODAL:
      return action.currentModal

    default:
      return state
  }
}

export default currentModal
