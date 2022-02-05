// saga.js
import { all, takeEvery, put ,fork} from 'redux-saga/effects';
import profileActions from './actions';
import DemoProfileData from './profile.data';
export function* profileReducer() {
  yield takeEvery(profileActions.FETCH_PROFILE_DATA_SUCCESS, function* ({payload}) {
    yield localStorage.setItem("profile", JSON.stringify(payload))
  });
}


function* fetchProfileDataEffect() {
  try {
    let profile = JSON.parse(localStorage.getItem('profile'));
    yield put(profileActions.fetchProfileDataSuccess(profile));
  } catch (error) {
    yield put(profileActions.fetchProfileDataFailure(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(profileReducer),
    fork(fetchProfileDataEffect),

  ]);
}
