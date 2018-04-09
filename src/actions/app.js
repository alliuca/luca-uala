import { SET_MODAL_VISIBILITY } from './types';

export const setModalVisibility = (e) => {
  console.log(e.target);
  console.log(e.target.parentNode.parentNode);
  console.log(e.target.parentNode.parentNode.getBoundingClientRect());
  return ({
    type: SET_MODAL_VISIBILITY,
    payload: e.target.parentNode.parentNode.getBoundingClientRect(),
  })
};
