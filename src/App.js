import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Contact from 'Components/Contact.js';
import Nav from 'Components/Nav.js'
import Aboutme from 'Containers/AboutMe';
import Work from 'Containers/Work';


const  App = () => {
  return (
    <div className="App">
      <header className="head">
        Lee YouSang
      </header>
      <Contact />
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/work" component={Work} />
        </div>
      </Router>
    </div>
  );
}

export default App;
