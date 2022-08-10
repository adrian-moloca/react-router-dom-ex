import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../../pages/home/Home.jsx';
import Services from '../../pages/services/Services.jsx';

const Routing = () => {
    return(
        <BrowserRouter>
            {/* <Header/> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}

export default Routing;