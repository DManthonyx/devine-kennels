import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../Styles/colors';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';

export const Wrapper = styled.div`
    background: ${colors.black};
    color: ${colors.white};
    margin-top: 60px;
`

export const Section = styled.section`

`

export const Div = styled.div`

`

export const H1 = styled.h1`

`

export const P = styled.p`

`

export const Img = styled.img`

`

export const Link = styled(NavLink)`

`;

export const A = styled.a`
    text-decoration: none;
    color: ${colors.white};
    & svg {
        width: 30px;
    }
`;


export const Button = styled.button`

`

export const InstaIcon = styled(Instagram)`
    color: inherit;
`

export const EmailIcon = styled(EmailOutline)`
    color: inherit;
`