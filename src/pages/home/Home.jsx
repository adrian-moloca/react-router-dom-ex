import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <p>Home</p>
            <Link to="/services">Services</Link>
        </>
    )
}

export default Home;