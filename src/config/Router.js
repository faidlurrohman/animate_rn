import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';
import {color} from '../css/Colors';
import {AuthContext} from './firebase/AuthProvider';

import HeaderAuth from '../components/HeaderAuth';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import Home from '../screens/main/Home';
import Landing from '../screens/Landing';

const DashboardStack = createStackNavigator();
const AuthScreen = () => {
  const configOptions = {
    header: (props) => <HeaderAuth {...props} />,
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
  };
  return (
    <DashboardStack.Navigator headerMode="screen">
      <DashboardStack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <DashboardStack.Screen
        name="SignIn"
        component={SignIn}
        options={configOptions}
      />
      <DashboardStack.Screen
        name="SignUp"
        component={SignUp}
        options={configOptions}
      />
    </DashboardStack.Navigator>
  );
};

const MainScreen = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Home" component={Home} />
    </DashboardStack.Navigator>
  );
};

const Router = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initialize, setInitialize] = useState(true);

  const _onAuthStateChanged = (_user) => {
    setUser(_user);
    if (initialize) setInitialize(false);
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(_onAuthStateChanged);
    return () => subscribe;
  }, []);

  if (initialize)
    return <ActivityIndicator size="large" color={color.avocado} />;

  return (
    <NavigationContainer>
      {user ? <MainScreen /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default Router;
