import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../Styles/colors';

export const Wrapper = styled.div`
    height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    padding-top: 29px;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.h1`

`

export const P = styled.p`

`

export const Img = styled.img`
    &.logo {
        width: 300px;
    }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;


export const Button = styled.button`
    height: 45px;
    width: 225px;
    border-radius: 8px;
    border: 0px;
    background: ${colors.black};
    color: ${colors.darkGold};
    font-size: 1.2em;
    &:focus {
        outline: none;
    }
`