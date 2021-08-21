import React from 'react';

// Styles
import { 
    Wrapper,
    Section,
    Div,
    H1,
    P,
    Img,
    Button,
    Link,
    A,
    InstaIcon,
    EmailIcon,
    YouTubeIcon,
} from './style';

const Footer = () => {
    return (
        <Wrapper className="Footer-Wrapper">
        <Div className="align-wrapper">
            <Section className="sec-one">
                <H1>Devine <br /> Kennels</H1>
            </Section>
            <Section className="sec-two">
                <Div className="sec-two-div">
                    <A href="https://www.instagram.com/devine_kennels/">
                        <InstaIcon></InstaIcon>
                    </A>
                    <A href="https://www.instagram.com/devine_kennels/">
                        <YouTubeIcon></YouTubeIcon>
                    </A>
                    <A href="mailto: dmanthonycoding@gmail.com">
                        <EmailIcon></EmailIcon>
                    </A>
                </Div>
                <Div className="sec-two-div">
                    <P>&#169; 2021 by devine kennels inc<br />all rights reserved</P>
                </Div>
            </Section>
        </Div>
        </Wrapper>
    )
}

export default Footer;