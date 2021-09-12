import React, { useState } from 'react';

import { 
    Wrapper,
    Div,
    P,
    H1,
    Form,
    Input,
    Button,
} from './style'

const Admin = () => {

    const initState = {
        username: '',
        password: ''
    }

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    // const [inputs, setInputs] = useState({})

    const submit = async (e) => {
        e.persist()
        e.preventDefault()
        console.log('submit')
    }

    // const handleInputChange = async (e) => {
    //     e.persist()
    //     setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    // }

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setFile(imageFile => (image))
    }


  return (
    <Wrapper>
        <Div>
            <H1>Image</H1>
            <Form onSubmit={submit}>
                {/* <P>Please enter name of img</P>
                <Input type="text" placeholder="image-file" name="img" value={inputs.img} onChange={handleInputChange}/>
                <P>Please enter name of dog</P>
                <Input type="text" placeholder="image-file" name="img" value={inputs.img} onChange={handleInputChange}/> */}
                <P>Select File</P>
                <Input type="file" placeholder="image-file" name="img" onChange={handleImageAsFile}/>
                <P>Error</P>
                <Button>Submit</Button>
            </Form>
        </Div>
    </Wrapper>
  )
}

export default Admin;