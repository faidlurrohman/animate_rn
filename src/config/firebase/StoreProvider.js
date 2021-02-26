import React, {createContext} from 'react';
import firestore from '@react-native-firebase/firestore';

export const StoreContext = createContext();

const userStore = firestore().collection('user');

export const StoreProvider = ({children}) => {
  <StoreContext.Provider
    value={{
      addNewUser: async (auth, user) => {
        try {
          await userStore.doc(auth.user.user.uid).set({
            email: auth.user.user.email,
            username: user.username,
            emailVerified: auth.user.user.emailVerified,
            fullname: null,
            firstname: null,
            middlename: null,
            lastname: null,
            phoneNumber: null,
            photoUrl: null,
            address: null,
            birth: null,
          });
        } catch (e) {
          console.error(e);
        }
      },
    }}>
    {children}
  </StoreContext.Provider>;
};
