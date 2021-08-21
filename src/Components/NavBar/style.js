import styled,{ keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, style } from '../../Styles/colors'

const transitionHomePage =  keyframes`
  0% { opacity: 0 }
  25% { opacity: .25 }
  50% { opacity: .5 }
  75% { opacity: .75 }
  100% { opacity: 1 }
`;

export const NavContainer = styled.div`
  padding-top: 18px;
  width: 100%;e
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

export const Img = styled.img`
  width: 133px;
  margin-top: 50px;
`

export const Title = styled.h1`
  font-size: 2.5em;
  font-family: Wynter;
  color: ${colors.black};
  display: flex;
  align-items: center;
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
  color: ${colors.black};
  &:hover {

  }
  &.active{
    border-bottom: 1px solid ${colors.red};
  }
  .show > &.active {
    border-bottom: none;
    color: ${colors.red};
  }
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 54rem;
  transition: left .75s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.white};
  &.show {
    left: 0;
  }
  & > a {
    color: white;
  }
`;

export const Ul = styled.ul`
  background: ${colors.white};
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
