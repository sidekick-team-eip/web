import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login'
import Chatbot from './views/Chatbot'
import Profile from './views/Profile'
import Message from './views/Message'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/login" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/signup" component={Signup} layout={LayoutDefault} />
          <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault} />
          <AppRoute exact path="/message" component={Message} layout={LayoutDefault} />
        </Switch>
        
      )} />
  );
}

export default App;