import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../Styles/colors';

export const Wrapper = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
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
    color: ${colors.white};
    font-size: 1.2em;
    &:focus {
        outline: none;
    }
`