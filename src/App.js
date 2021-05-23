import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Switch>
              <Route exact path = '/' component = { Body } />
              <Route exact path = '/header' component = { Header } />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
