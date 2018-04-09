import { SET_MODAL_VISIBILITY } from 'actions/types';

const initialState = {
  modalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return Object.assign({}, state, { modalOpen: action.payload });
    default:
      return state;
  }
}
