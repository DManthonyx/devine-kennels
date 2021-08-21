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
} from './style';

const Footer = () => {
    return (
        <Wrapper className="Footer-Wrapper">
        <Div className="align-wrapper">
            <Section className="sec-one">
                <H1>Devine <br /> Kennels</H1>
            </Section>
            <Section className="sec-two">
                <Div>
                    <A href="https://www.instagram.com/devine_kennels/">
                        <InstaIcon></InstaIcon>
                    </A>
                    <A href="mailto: dmanthonycoding@gmail.com">
                        <EmailIcon></EmailIcon>
                    </A>
                </Div>
            </Section>
        </Div>
        </Wrapper>
    )
}

export default Footer;