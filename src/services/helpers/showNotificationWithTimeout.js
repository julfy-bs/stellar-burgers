import { closeAllModal, setModalNotification } from '../slices/modalSlice.js';

export const showNotificationWithTimeout = (content, dispatch, setMessage) => {
  dispatch(setMessage({ boolean: true }));
  dispatch(setModalNotification(content));
  setTimeout(() => {
      dispatch(setMessage({ boolean: false }));
      dispatch(closeAllModal());
    },
    4000);
}