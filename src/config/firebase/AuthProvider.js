import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {WEB_CLIENT_ID} from '@env';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

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
            await auth().signInWithCredential(googleCredential);
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
        loginFacebook: async () => {
          try {
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.log('e', e);
          }
        },
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
