import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// ROUTES
import { ROUTES } from '../../Const';

// Components
import Hamburger from './Hamburger';

import {
    NavContainer,
    NavRow,
    Ul,
    Li,
    H1,
    Link,
    HamLink,
    Overlay,
    Img,
    NavRowLeft,
    NavRowMid,
    NavRowRight,
    SocialLink,
    SocialIcon,
    Div
   } from './style';


const NavBar = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isHidden, setIsHidden ] = useState(false);
  const [ isHome, setIsHome ] = useState(false);

  useEffect(() => {
    let { pathname } = props.location;
    if(pathname === '/home' || pathname === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  },[props.location]);

  window.onresize = () =>  (window.innerWidth > 900 && isOpen) && setIsOpen(false);
  console.log(isHome, isOpen, 'props')
  return (
      <NavContainer className="NavContainer" visible={isHidden}>
      <NavRow>
        <H1 className="modal-nav" isHome={isHome} isOpen={isOpen}>Devine Kennels</H1>
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen}/>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>
        <Ul>
          <H1 className="modal" isHome={isHome} isOpen={isOpen}>Devine Kennels</H1>
            {
              ROUTES.map((route, i) =>
                <Li onClick={() => setIsOpen(!isOpen)} key={i}>
                  <HamLink exact to={`/${route}`}>{route}</HamLink>
                </Li>
              )
            }
        </Ul>
        <Img src="https://i.imgur.com/JUELsI2.png" title="Devine Kennels, Frenchies, puppies, animals" />
      </Overlay>
    </NavContainer>
  );
};



export default withRouter(NavBar);