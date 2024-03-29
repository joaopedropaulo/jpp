import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from '../actions/types';

const initialState = {
  profile: null,
  repos: [],
  loading: true,
  error: {},
};

const profileActions = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PROFILE:
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };
    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false };
    case CLEAR_PROFILE:
      return { ...state, profile: null, repos: [], loading: false };
    default:
      return state;
  }
};

export default profileActions;
