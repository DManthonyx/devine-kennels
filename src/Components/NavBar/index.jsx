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
    Title,
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
  const [ isHome, setIsHome ] = useState('false');

  useEffect(() => {
    let { pathname } = props.location;
    if(pathname === '/home' || pathname === '/') {
      setIsHome('true')
    } else {
      setIsHome('false')
    }
  },[props.location]);

  window.onresize = () =>  (window.innerWidth > 900 && isOpen) && setIsOpen(false);

  return (
      <NavContainer className="NavContainer" visible={isHidden}>
      <NavRow>
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen}/>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>

        <Ul>
          <Title>Devine Kennels</Title>
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