import React from 'react'
import { Col, Container, Form, Row , Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import Layout from '../../components/Layouts';
import Input from '../../components/UI';


/**
 * @author Rojan Dhimal
 * @function login
 */

const Signin = (props) => {

    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email:"rojan@gmail.com",
            password:'rojan123'
        }
        dispatch(login(user));
    }
    return (
        <Layout>
            <Container>
                <Row style={{marginTop:'50px'}}>
                    <Col  md={{span:6, offset:3}}>
                    <Form onSubmit={userLogin}>
                        <Input 
                            label ="Email"
                            placeholder="abc@gmail.com"
                            value=''
                            id='email'
                            type='email'
                            onChange={() => {}}
                            />

                        <Input 
                            label ="Password"
                            placeholder="Password"
                            value=''
                            id='password'
                            type='password'
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

export default Signin;
