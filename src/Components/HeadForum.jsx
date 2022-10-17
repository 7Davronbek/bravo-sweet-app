import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap'

const HeadForum = () => {
    return (
        <>
            <div className="HeadForum">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head_forum_name">Форум</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 d-flex flex-column">
                            <img src="/image/head_forum_1.jpeg" alt="" className="head_forum_img" />
                            <div className="head_forum_box">
                                <div className="head_forum_h">Какие цветы под запретом: что нельзя дарить</div>
                                <div className="head_forum_p">Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...</div>
                            </div>
                        </div>
                        <div className="col-4 d-flex flex-column">
                            <img src="/image/head_forum_1.jpeg" alt="" className="head_forum_img" />
                            <div className="head_forum_box">
                                <div className="head_forum_h">Какие цветы под запретом: что нельзя дарить</div>
                                <div className="head_forum_p">Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...</div>
                            </div>
                        </div>
                        <div className="col-4 d-flex flex-column">
                            <img src="/image/head_forum_1.jpeg" alt="" className="head_forum_img" />
                            <div className="head_forum_box">
                                <div className="head_forum_h">Какие цветы под запретом: что нельзя дарить</div>
                                <div className="head_forum_p">Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="forum_h_2">
                                Наша компания заботиться о каждом клиенте и старается постоянно усовершенствоваться. Поэтому согласно закона «Про защиту прав потребителя» если купленный товар вам не подошел по какой - то из причин, имеет заводские дефекты, Вы имеете право вернуть или обменять товар в течении 14 дней с момента его покупки.
                            </div>
                        </div>

                        <UncontrolledAccordion defaultOpen="1">
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    <div className="forum_accor_h">Как купить? </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    <div className="forum_accor_p">Вы можете заказать товар через сайт, после чего Вам позвонит наш менеджер и обсудит все детали заказа, или сделать заказ по одному из телефонов: (xxx) xxx-xx-xx, (xxx) xxx-xx-xx, время работы в будние дни с 9:00 до 18:00, суббота с 10:00 до 16:00,</div>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="2">
                                    <div className="forum_accor_h">Доставка и оплата</div>
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <div className="forum_accor_p">Вы можете заказать товар через сайт, после чего Вам позвонит наш менеджер и обсудит все детали заказа, или сделать заказ по одному из телефонов: (xxx) xxx-xx-xx, (xxx) xxx-xx-xx, время работы в будние дни с 9:00 до 18:00, суббота с 10:00 до 16:00,</div>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="3">
                                    <div className="forum_accor_h">О нашем магазине</div>
                                </AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <div className="forum_accor_p">Вы можете заказать товар через сайт, после чего Вам позвонит наш менеджер и обсудит все детали заказа, или сделать заказ по одному из телефонов: (xxx) xxx-xx-xx, (xxx) xxx-xx-xx, время работы в будние дни с 9:00 до 18:00, суббота с 10:00 до 16:00,</div>
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadForum