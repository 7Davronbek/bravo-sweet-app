import React from 'react'

const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="head_box_1"> <img src="/image/tort_1.jpeg" alt="" className="header_img" /></div>
                        </div>
                        <div className="col-6">
                            <div className="row h-100 align-content-between">
                                <div className="col-6">
                                    <div className="head_box_2">
                                        <img src="/image/cake_1.png" alt="" className="header_img" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="head_box_2">
                                        <img src="/image/about_1.jpg" alt="" className="header_img" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="head_box_2">
                                        <img src="/image/pizza.png" alt="" className="header_img" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="head_box_2">
                                        <img src="/image/cake_1.png" alt="" className="header_img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Header_2">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="head2_box_1">
                                <div className="head2_box_h">Фото доставок наших букетов</div>
                                <div className="head2_box_p">Безупречное качество обслуживания и доставка в любую точку города</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="head2_box_2">
                                <div className="head2_box_h_2">Фото доставок наших букетов</div>
                                <div className="head2_box_p_2">Безупречное качество обслуживания и доставка в любую точку города</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="head2_box_3">
                                <div className="head2_box_h_3">Подарок каждому клиенту</div>
                                <div className="head2_box_p_3">К каждому заказу мы прилогаем комплимент от компании в виде маленького презента</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header