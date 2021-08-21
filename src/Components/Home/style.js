import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../Styles/colors';
import { Dog } from '@styled-icons/fa-solid/Dog';

export const Wrapper = styled.div`
    height: 82vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-family: Wynter;
    height: 45px;
    width: 225px;
    border-radius: 8px;
    border: 1px solid ${colors.black};
    color: ${colors.black};
    font-size: 1.9em;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    &:focus {
        outline: none;
    }
`;



// icons

export const IconDog = styled(Dog)`
    width: 25px;
`