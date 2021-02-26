import React from 'react';
import {AuthProvider} from './src/config/firebase/AuthProvider';
import Router from './src/config/Router';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
