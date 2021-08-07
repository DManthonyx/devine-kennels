import styled,{ keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../Styles/colors'

const transitionHomePage =  keyframes`
  0% { opacity: 0 }
  25% { opacity: .25 }
  50% { opacity: .5 }
  75% { opacity: .75 }
  100% { opacity: 1 }
`;

export const NavContainer = styled.div`
  position: absolute;
  padding-top: 18px;
  z-index: 1;
  width: 100%;
`;

export const NavRowMid = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const NavRowRight = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-end;
`;

export const NavRow = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    ${NavRowMid}, ${NavRowRight}  {
      display:none;
    }
  }
`;

export const NavRowLeft = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 10px;
  width: 25%;
`;

export const Logo = styled.img`
  width: 88px;
  height: 84px;
  @media (max-width: 700px) {
    width: 78px;
    height: 64px;
  }
`

export const Title = styled.h1`
  font-size: 2.5em;
  color: ${colors.main};
  display: flex;
  align-items: center;
  padding-left: 42px;
`;

export const Link = styled(NavLink)`
  font-size: .9em;
  font-family: Manrope;
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: ${props => props.ishome === 'true' ? 'white' : 'black'};
  &:hover {

  }
  &.active{
    border-bottom: ${props => props.ishome === 'true' ? '3px solid white' : '3px solid #EE8C3A'};
  }
`;

export const HamLink = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: white;
  &:hover {

  }
  &.active{
    border-bottom: 1px solid #f5c303;
  }
  .show > &.active {
    border-bottom: none;
    color: gold;
  }
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 54rem;
  transition: left .75s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.black};
  &.show {
    left: 0;
  }
  & > a {
    color: white;
  }
`;

export const Ul = styled.ul`
  padding-right: 18px;
  background: ${colors.black};
  text-align: center;
`

export const Li = styled.li`
  list-style: none;
`;

export const Div = styled.div`

`;

export const SocialLink = styled(NavLink)`
  margin-right: 15px;
`;

export const SocialIcon = styled.img`

`;
