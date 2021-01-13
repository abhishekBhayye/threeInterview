// import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Header from './header';
import Home from './home';
import Login from './login';
import Footer from './Footer';
// import { useStateValue } from "./StateProvider";
// import { auth } from './firebase';

function App() {

  // const [{ user }, dispatch] = useStateValue();

  // // Code that run based on given conditions
  // // useEffect

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // User is logged in
  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser
  //       })
  //     }
  //     else {
  //       // User is logged out
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null
  //       })
  //     }
  //   });

  //   return () => {
  //     // All cleanup operations here
  //     unsubscribe();
  //   }
  // }, []);

  // console.log('User is >>>>',user);

  return (
    <Router>
    <div className="App">
      <Switch>
        
        <Route path="/login">
          <Login />
          <Footer/>
        </Route>

        {/* This is a default route */}
        <Route path="/">
          <Header />
          <Home />
          <Footer/>
        </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
