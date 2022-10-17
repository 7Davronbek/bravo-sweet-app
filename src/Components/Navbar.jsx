import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [Buy, SetBuy] = useState(false);

    const getData = useSelector(item => item.cartReducer.carts)

    return (
        <>
            <div className="Navbar">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-5 d-flex justify-content-evenly">
                            <Link to='/' className="nav_a">Главная</Link>
                            <Link to='/Menu' className="nav_a">Меню</Link>
                            <Link to='/About' className="nav_a">О нас</Link>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <div className="nav_logo">Bravissimo</div>
                        </div>
                        <div className="col-5 d-flex justify-content-evenly align-items-center">

                            <Link to='/Contacts' className="nav_a">Контакты</Link>
                            <a href="" className="nav_phone">
                                <div className="nav_call">+998 (90) 000 00 00</div>
                                <div className="nav_work">Ежедневно с 8:00 до 23:00</div>
                            </a>
                            <img onClick={() => SetBuy(!Buy)} className="nav_buy_icon" src="/image/buy_box.png" alt="" />
                            {getData.length}
                        </div>
                        <div className="nav_buy ">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar