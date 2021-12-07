import React from 'react';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const HomePage = () => {
    return(
        <div>
            <Navbar/>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default HomePage;