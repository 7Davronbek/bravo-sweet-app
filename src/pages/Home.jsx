import React from 'react'
import Feedback from '../Components/Feedback'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeadForum from '../Components/HeadForum'
import HeadWhy from '../Components/HeadWhy'
import Navbar from '../Components/Navbar'
import Stocks from '../Components/Stocks'
// import Countdown from 'react-countdown';

const Home = () => {

    return (
        <>
            {/* <Countdown date={Date.now() + 100} /> */}
            <Navbar />
            <Header />
            <Stocks />
            <HeadWhy />
            <HeadForum />
            <Feedback />
            <Footer />
        </>
    )
}

export default Home