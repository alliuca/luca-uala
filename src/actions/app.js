import { SET_MODAL_VISIBILITY } from './types';

export const setModalVisibility = (e, data) => {
  const payload = !e ? false : {
    DOMRect: e.target.parentNode.parentNode.getBoundingClientRect(),
    content: data,
  };
  return ({
    type: SET_MODAL_VISIBILITY,
    payload,
  });
}
