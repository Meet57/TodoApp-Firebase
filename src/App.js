import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import { Dashboard } from './components/dashboard/Dashboard';
import SignUp from './components/auth/SignUp';
import { Navbar } from './layout/Navbar';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <>
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
    </>
  );
}

export default App;
