import React from 'react'
import Feedback from '../Components/Feedback'
import Header from '../Components/Header'
import HeadForum from '../Components/HeadForum'
import HeadWhy from '../Components/HeadWhy'
import Stocks from '../Components/Stocks'
// import Countdown from 'react-countdown';

const Home = () => {

    return (
        <>
            {/* <Countdown date={Date.now() + 100} /> */}
            <Header />
            <Stocks />
            <HeadWhy />
            <HeadForum />
            <Feedback />
        </>
    )
}

export default Home