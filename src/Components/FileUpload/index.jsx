import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UploadImage } from '../../Store/Actions/fileActions';

// Styles
import { 
    Wrapper,
    Div,
    P,
    H1,
    Form,
    Input,
    Button,
} from './style';

const FileUpload = (props) => {
        const initState = {
            username: '',
            password: ''
        }
    
        const [img, setImg] = useState(null);
        const [error, setError] = useState(null);
        const [url, setURL] = useState("");
        // const [inputs, setInputs] = useState({})
    
        const submit = async (e) => {
            e.persist()
            e.preventDefault()
            console.log(img, 'FE img <<<')
            props.uploadImage(img);
        }
    
        // const handleInputChange = async (e) => {
        //     e.persist()
        //     setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
        // }
    
        const handleInputAsFile = (e) => {
            const image = e.target.files[0]
            console.log(image, 'handleInputAsFile <<<')
            setImg(image)
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
                    <P>Upload Image</P>
                    <Input type="file" placeholder="image-file" name="img" onChange={handleInputAsFile}/>
                    <P>{error && error}</P>
                    <Button>Submit</Button>
                </Form>
            </Div>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (img) => dispatch(UploadImage(img)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FileUpload));

