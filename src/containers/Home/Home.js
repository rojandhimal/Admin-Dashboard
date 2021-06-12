import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layouts';
import { NavLink } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <Layout>
                <Container fluid>
                    <Row>
                        <Col md={2} className='sidebar'>
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/products'>Products</NavLink></li>
                                <li><NavLink to='/orders'>Orders</NavLink></li>
                            </ul>
                        </Col>
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
