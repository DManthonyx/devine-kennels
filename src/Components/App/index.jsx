import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components
import NavBar from '../NavBar';
import About from '../About';
import Home from '../Home';
import Image from '../Image';
import Contact from '../Contact';

// styles 
import { 
  Wrapper
} from './style';

// Error Handler

const My404 = () => {
  if(true) {
    return  <Redirect to="/home" />
  }
};


function App({ location }) {
  return (
    <Wrapper className="App-Wrapper">
    <NavBar />
    <TransitionGroup className="transition-group">
    <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
    <section className="route-section">
    <Switch>
      <Route exact path='/' render={() => <Home /> }  />
      <Route exact path='/home' render={() => <Home /> }  />
      <Route exact path='/about' render={() => <About />}  />
      <Route exact path='/images' render={() => <Image />} />
      <Route exact path='/contact' render={() => <Contact />} />
      <Route component={ My404 } />
    </Switch>
    </section>
    </CSSTransition>
    </TransitionGroup>
    </Wrapper>
  );
}
export default withRouter(App);


