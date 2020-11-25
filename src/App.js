import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import SearchWrapperContainer from './components/SearchWrapper/SearchWrapperContainer';
import Book from './components/SingleBook'
import PageNotFound from './components/NotFound/PageNotFound'
import ScrollToTop from './components/WindowManipulation/ScrollToTop'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import notFoundImage from './graphycs/images/not-found.jpg'
import "./stylesheets/allStyles.css"


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
            <Switch>
                <Route exact path='/React_Books_Search_System/' component={SearchWrapperContainer} />
                <Route exact path='/React_Books_Search_System/find' component={SearchWrapperContainer} />
                <Route exact path='/React_Books_Search_System/about' component={About} />
                <Route exact path="/React_Books_Search_System/books/:bookId"  component={Book} />
                <Route render={()=>(<PageNotFound firstTitle="404" secondTitle="Page not found" src={notFoundImage}/>)} />
            </Switch>   
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
