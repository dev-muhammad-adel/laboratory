import { store } from './store';
import authActions from '@iso/redux/auth/actions';
import profileActions from '@iso/redux/profile/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
     store.dispatch(profileActions.checkProfile());
  });
