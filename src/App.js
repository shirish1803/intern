import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Containers/Home';
import ContactUs from './Containers/ContactUs';


function App() {
  return (
    <Router>
      <div className="App">
        <Hero/>
        <Route path="/" exact component={Home}/>
        <Route path="/contact-us" component={ContactUs}/>
        
      </div>
    </Router>
  );
}

export default App;
