import React from 'react';
import {createStore} from 'redux'
import Header from './components/Header';
import Footer from './components/Footer';
import "./stylesheets/allStyles.css"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
