import auth from '@react-native-firebase/auth';
import {storeUser} from './Store';

const authLogin = async (_user) => {
  try {
    const signInDefault = await auth().signInWithEmailAndPassword(
      _user.emailUsername,
      _user.password,
    );
    if (signInDefault) {
      console.log('signInDefault', signInDefault);
      return signInDefault;
    }
  } catch (e) {
    console.log('e', e);
    return e;
  }
};

const authCreate = async (_user) => {
  try {
    const createUser = await createUserWithEmailAndPassword(
      _user.email,
      _user.password,
    );
    if (createUser) {
      console.log('createUser', createUser);
      storeUser(createUser, _user);
    }
  } catch (e) {
    console.log('e', e);
    return e;
  }
};

const loginFB = async () => {};

const authSignOut = () => {
  auth()
    .signOut()
    .then(() => {
      console.log('auth sign out');
    });
};

export {authLogin, loginFB, authCreate, authSignOut};
