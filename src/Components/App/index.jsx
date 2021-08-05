import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from '../About';
import Home from '../Home';
import Image from '../Image';
import NavBar from '../NavBar';

// styles 
import { 
  Wrapper
} from './style';

const My404 = () => {
  if(true) {
    return  <Redirect to="/home" />
  }
};


function App({ location }) {
  return (
    <main>
      <NavBar />
    <Wrapper>
    <TransitionGroup className="transition-group">
    <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
    <section className="route-section">
    <Switch>
      <Route exact path='/' render={() => <Home /> }  />
      <Route exact path='/home' render={() => <Home /> }  />
      <Route exact path='/about' render={() => <About />}  />
      <Route exact path='/images' render={() => <Image />} />
      <Route component={ My404 } />
    </Switch>
    </section>
    </CSSTransition>
    </TransitionGroup>
    </Wrapper>
  </main>
  );
}
export default withRouter(App);


