import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
