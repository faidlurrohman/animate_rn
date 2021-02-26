import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {WEB_CLIENT_ID} from '@env';

export const AuthContext = createContext();

GoogleSignin.configure({webClientId: WEB_CLIENT_ID});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginDefault: async (email, pass) => {
          try {
            await auth().signInWithEmailAndPassword(email, pass);
          } catch (e) {
            console.log('e', e);
          }
        },
        registerDefault: async (email, pass) => {
          try {
            await createUserWithEmailAndPassword(email, pass);
          } catch (e) {
            console.log('e', e);
          }
        },
        loginGoogle: async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(
              idToken,
            );
            return auth().signInWithCredential(googleCredential);
          } catch (e) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
            console.log('e', e);
          }
        },
        loginFacebook: async () => {},
        loginTwitter: async () => {},
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log('e', e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
