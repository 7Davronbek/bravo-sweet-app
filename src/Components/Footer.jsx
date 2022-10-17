import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-4">
                            <div className="foot_name">Bravissimo</div>
                            <div className="foot_soc">
                                <a href=""><img className='foot_soc_img' src="/image/telegram.png" alt="" /></a>
                                <a href=""><img className='foot_soc_img' src="/image/instagram.png" alt="" /></a>
                                <a href=""><img className='foot_soc_img' src="/image/facebook.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-6 text-end me-5">
                            <div className="foot_con_name mb-3">Контактная информация</div>
                            <a className='foot_address' href="">Сергелийский район, город Ташкент, Карасувский МФУ, улица Янги Турмуш 4</a>
                            <div className='mt-3 mb-3  d-flex flex-column'>
                                <a className='foot_call' href="">+998 (90) 900 00 00</a>
                                <a className='foot_call' href="">+998 (90) 900 00 00</a>
                            </div>
                            <a className="foot_mail" href="">bravissimo@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer