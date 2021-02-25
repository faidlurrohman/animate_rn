import firestore from '@react-native-firebase/firestore';

const userStore = firestore().collection('user');

const storeUser = async (_auth, _user) => {
  try {
    const storeNewUser = await userStore.doc(_auth.user._user.uid).set({
      email: _auth.user._user.email,
      username: _user.username,
      emailVerified: _auth.user._user.emailVerified,
      fullname: null,
      firstname: null,
      middlename: null,
      lastname: null,
      phoneNumber: null,
      photoUrl: null,
      address: null,
      birth: null,
    });
    console.log('storeNewUser', storeNewUser);
  } catch (e) {
    console.error(e);
  }
};

export {storeUser};
