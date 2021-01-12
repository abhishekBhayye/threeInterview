import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Header from './header';
import Home from './home';
import Login from './login';
import Footer from './Footer';

function App() {
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
