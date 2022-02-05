import React from 'react';


// Styles
import { 
  Wrapper,
  Div,
  H1,
  P,
  Img,
  Link,
  IconDog,
} from './style'

const Home = () => {
  return (
    <Wrapper className="Home-Wrapper">
      <Div className="">
        <Img src="https://i.imgur.com/JUELsI2.png" className="logo" alt="Devin Kennels Frenchies" /> 
        <Link exact to="/images">
          see puppies
        </Link>
      </Div>
    </Wrapper>
  )
}

export default Home