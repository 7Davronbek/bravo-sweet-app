import React from 'react'

const Feedback = () => {
    return (
        <>
            <div className="Feedback">
                <div className="container">
                    <div className="row">
                        <div className="col-12"><div className="feed_name">Cвяжитесь с нами</div> </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <form className='feed_box' action="">
                                <input placeholder='Имя' className='feed_inp' type="text" />
                                <input placeholder='Телефон' className='feed_inp' type="number" />
                                <textarea placeholder='Напишите свой вопрос' className='feed_text'></textarea>
                                <div className="feed_btn">
                                    <button> Отправить
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-6">
                            <div className="feed_p">
                                Не стесняйтесь связываться с нами в любое время.
                                Мы свяжемся с вами, как только сможем.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback