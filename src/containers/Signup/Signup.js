import React from 'react';
import { Col, Container, Form, Row , Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../../components/Layouts';
import Input from '../../components/UI';

const Signup = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    
    if(auth.authenticate){
        return <Redirect to='/' />
    }
    return (
        <Layout>
            <Container>
                <Row style={{marginTop:'50px'}}>
                    <Col  md={{span:6, offset:3}}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input 
                                label ="First Name"
                                placeholder="First Name"
                                value=''
                                id='firstname'
                                type='text'
                                onChange={() => {}}
                                />
                            </Col>
                            <Col md={6}>
                            <Input 
                                label ="Last Name"
                                placeholder="Last Name"
                                value=''
                                id='lastname'
                                type='text'
                                onChange={() => {}}
                                />
                            </Col>
                        </Row>
                            <Input 
                                label ="Email"
                                placeholder="rojandhimal1@gmail.com"
                                value=''
                                id='email'
                                type='email'
                                onChange={() => {}}
                                />

                            <Input 
                                label ="Last Name"
                                placeholder="Last Name"
                                value=''
                                id='lastname'
                                type='text'
                                onChange={() => {}}
                                />
                        
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Signup;
