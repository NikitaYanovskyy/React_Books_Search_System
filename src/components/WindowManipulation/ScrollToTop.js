import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = withRouter((props)=>{
  useEffect(() => {
    props.history.listen(() => {
      if(props.history.location.pathname.includes(`books`)){
        window.scrollTo(0, 0);
      }
    });
  });
  return <Fragment>{props.children}</Fragment>;
})
export default ScrollToTop;