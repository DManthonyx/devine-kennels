import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../Styles/colors';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';
import { Youtube } from '@styled-icons/remix-line/Youtube'

export const Wrapper = styled.div`
    // background: ${colors.black};
    // color: ${colors.white};
    margin: 60px 0px 16px 0px;
`

export const Section = styled.section`
    margin-top: 5px;
    &.sec-one {
        font-family: Wynter;
        border-right: 1px solid black;
        padding: 11px;
        letter-spacing: 1px;
    }
    &.sec-two {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 10px;
    }
`
    
export const Div = styled.div`
    &.align-wrapper {
        display: flex;
        border-top: 1px solid ${colors.black};
        margin: 0px 10px;
    }
    &.sec-two-div {
        width: 100%;
    }
`

export const H1 = styled.h1`

`

export const P = styled.p`
    text-transform: uppercase;
    font-size: 12px;
`

export const Img = styled.img`

`

export const Link = styled(NavLink)`

`;

export const A = styled.a`
    text-decoration: none;
    color: ${colors.black};
    & svg {
        width: 30px;
    }
`;


export const Button = styled.button`

`

// Icons

export const InstaIcon = styled(Instagram)`
    color: inherit;
`

export const EmailIcon = styled(EmailOutline)`
    color: inherit;
`

export const YouTubeIcon = styled (Youtube)`
    color: inherit;
`