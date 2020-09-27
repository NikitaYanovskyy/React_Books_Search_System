import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import SearchWrapper from './components/SearchWrapper';
import {BrowserRouter, Route} from 'react-router-dom'
import "./stylesheets/allStyles.css"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path='/about' component={About} />
        <Route path='/React_Books_Search_System' component={SearchWrapper} />
        <Footer />
      </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
