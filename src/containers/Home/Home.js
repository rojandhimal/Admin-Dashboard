import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layouts'

const Home = () => {
    return (
        <Layout>
            <Jumbotron className='text-center'>
                <h1>Welcome to Admin Dashboard</h1>
            </Jumbotron>
        </Layout>
    )
}

export default Home
