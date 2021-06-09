import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layouts';
import './style.css';

const Home = () => {
    return (
        <Layout>
                <Container fluid>
                    <Row>
                        <Col md={2} className='sidebar'>Sidebar</Col>
                        <Col md={10} style={{marginLeft:'auto'}}>Main Container</Col>
                    </Row>
                </Container>



            {/* <Jumbotron className='text-center'>
                <h1>Welcome to Admin Dashboard</h1>
            </Jumbotron> */}
        </Layout>
    )
}

export default Home;
