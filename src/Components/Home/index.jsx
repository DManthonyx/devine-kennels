import React from 'react';


// Styles
import { 
  Wrapper,
  Div,
  H1,
  P,
  Img,
  Button,
  Link,
} from './style'

const Home = () => {
  return (
    <Wrapper className="Home-Wrapper">
      <Div className="">
        <Img src="https://i.imgur.com/JUELsI2.png" className="logo" alt="Devin Kennels Frenchies" /> 
        <Button><Link exact to="/images">see frenchies</Link></Button>
      </Div>
    </Wrapper>
  )
}

export default Home