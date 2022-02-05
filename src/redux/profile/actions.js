const profileActions = {
  FETCH_PROFILE_DATA_START: 'FETCH_PROFILE_DATA_START',
  FETCH_PROFILE_DATA_SUCCESS: 'FETCH_PROFILE_DATA_SUCCESS',
  FETCH_PROFILE_DATA_FAILURE: 'FETCH_PROFILE_DATA_FAILURE',
  SET_PROFILE_DATA: 'SET_PROFILE_DATA',
  CHECK_PROFILE: 'CHECK_PROFILE',

  checkProfile: () => ({ type: profileActions.CHECK_PROFILE }),

  fetchProfileDataStart: () => ({
    type: profileActions.FETCH_PROFILE_DATA_START,
  }),
  fetchProfileDataSuccess: profile =>{ return({
    type: profileActions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile,
  })},
  fetchProfileDataFailure: error => ({
    type: profileActions.FETCH_PROFILE_DATA_FAILURE,
    payload: error,
  }),
};

export default profileActions;
