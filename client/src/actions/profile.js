import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');

    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile =
  (profile, history) =>
    async (dispatch) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const res = await axios.post('/api/profile', profile, config);
        dispatch({ type: GET_PROFILE, payload: res.data });
        dispatch(setAlert('Profile created', 'success'));

        history.push('/dashboard');
      } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((e) => dispatch(setAlert(e.msg, 'warning')));
        }

        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status },
        });
      }
    };

export const updateProfile = (profile, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put('/api/profile', profile, config);
    dispatch({ type: GET_PROFILE, payload: res.data });
    dispatch(setAlert('Profile updated', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, 'warning')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
