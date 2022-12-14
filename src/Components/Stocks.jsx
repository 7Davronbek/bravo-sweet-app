import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/cartAction";
import { data } from "../backend/data";

const Stocks = () => {
    const dispatch = useDispatch()
    const addToCart = item => {
        dispatch(ADD(item))
    }
    return (
        <>

            <div className="Stocks">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="stock_name">
                                Акции
                            </div>
                        </div>
                    </div>


                    <div className="stock_name_2">
                        Cладости
                    </div>


                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        pagination={{
                            clickable: true,
                            // type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className="row">
                            <div className="col-12 ">

                                {data && data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="stock_box">
                                            <div>
                                                <img className='stock_img' src={item.image} alt={item.title} />
                                                <div className="stock_box_name">{item.title}</div>
                                                <div className="stock_box_p">
                                                   {item.name}</div>
                                            </div>
                                            <div className="stock_sale_box">
                                                <div className="stock_sales">
                                                    <div className="stock_box_h_old">
                                                        {item.oldPrice} сум  </div>
                                                    <div className="stock_box_h">
                                                        {item.price} сум  </div>
                                                </div>
                                                <div className="stock_btn">
                                                    <button onClick={() => addToCart(item)} >Заказать
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>



                        </div>

                    </Swiper>




                    <div className="stock_name_2">
                        Пицца
                    </div>



                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        pagination={{
                            clickable: true,
                            // type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className="row">
                            <div className="col-12 ">
                                <SwiperSlide>
                                    <div className="stock_box">
                                        <div className="d-flex flex-column">
                                            <div className="stock_img_box_2">
                                                <img className='stock_img_2' src="/image/pizza.png" alt="" />
                                            </div>
                                            <div className="stock_box_name_2">Мини торт «Рафаэлло»</div>
                                            <div className="stock_box_p">
                                                Воздушный бисквит пропитан молочным сиропом, миндальный крустилант, вафельная начинка со сгущенкой с миндальным грильяжем и кокосовым кремом Шантилье
                                                Торт рассчитан на 6-8 персон.  </div>
                                        </div>
                                        <div className="stock_sale_box">
                                            <div className="stock_sales">
                                                <div className="stock_box_h_old">
                                                    140 000 сум  </div>
                                                <div className="stock_box_h">
                                                    121 000 сум  </div>
                                            </div>
                                            <div className="stock_btn_2">
                                                <button>Заказать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="stock_box">
                                        <div className="d-flex flex-column">
                                            <div className="stock_img_box_2">
                                                <img className='stock_img_2' src="/image/pizza.png" alt="" />
                                            </div>
                                            <div className="stock_box_name_2">Мини торт «Рафаэлло»</div>
                                            <div className="stock_box_p">
                                                Воздушный бисквит пропитан молочным сиропом, миндальный крустилант, вафельная начинка со сгущенкой с миндальным грильяжем и кокосовым кремом Шантилье
                                                Торт рассчитан на 6-8 персон.  </div>
                                        </div>
                                        <div className="stock_sale_box">
                                            <div className="stock_sales">
                                                <div className="stock_box_h_old">
                                                    140 000 сум  </div>
                                                <div className="stock_box_h">
                                                    121 000 сум  </div>
                                            </div>
                                            <div className="stock_btn_2">
                                                <button>Заказать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="stock_box">
                                        <div className="d-flex flex-column">
                                            <div className="stock_img_box_2">
                                                <img className='stock_img_2' src="/image/pizza.png" alt="" />
                                            </div>
                                            <div className="stock_box_name_2">Мини торт «Рафаэлло»</div>
                                            <div className="stock_box_p">
                                                Воздушный бисквит пропитан молочным сиропом, миндальный крустилант, вафельная начинка со сгущенкой с миндальным грильяжем и кокосовым кремом Шантилье
                                                Торт рассчитан на 6-8 персон.  </div>
                                        </div>
                                        <div className="stock_sale_box">
                                            <div className="stock_sales">
                                                <div className="stock_box_h_old">
                                                    140 000 сум  </div>
                                                <div className="stock_box_h">
                                                    121 000 сум  </div>
                                            </div>
                                            <div className="stock_btn_2">
                                                <button>Заказать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="stock_box">
                                        <div className="d-flex flex-column">
                                            <div className="stock_img_box_2">
                                                <img className='stock_img_2' src="/image/pizza.png" alt="" />
                                            </div>
                                            <div className="stock_box_name_2">Мини торт «Рафаэлло»</div>
                                            <div className="stock_box_p">
                                                Воздушный бисквит пропитан молочным сиропом, миндальный крустилант, вафельная начинка со сгущенкой с миндальным грильяжем и кокосовым кремом Шантилье
                                                Торт рассчитан на 6-8 персон.  </div>
                                        </div>
                                        <div className="stock_sale_box">
                                            <div className="stock_sales">
                                                <div className="stock_box_h_old">
                                                    140 000 сум  </div>
                                                <div className="stock_box_h">
                                                    121 000 сум  </div>
                                            </div>
                                            <div className="stock_btn_2">
                                                <button>Заказать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                        </div>

                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Stocks