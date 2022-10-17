import React from 'react'

const Feedback2 = () => {
  return (
    <>
      <div className="Feedback2">
        <div className="container">
          <div className="row">
            <div className="col-12"><div className="feed2_name">Контакты</div> </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="feed2_h">Заполните форму для обратной связи</div>
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
              <div className="feed2_h">Свяжитесь с нами</div>
              <div className="feed_p">
                Не стесняйтесь связываться с нами в любое время.
                Мы свяжемся с вами, как только сможем.
              </div>
              <div className="feed2_soc">
                <img src="/image/location.png" alt="" />
                <a href="" className="feed2_soc_p">м. Київ, вулиця Оболонська Набережна, 7, корпус 5</a>
              </div>
              <div className="feed2_soc">
                <img src="/image/phone.png" alt="" />
                <a href="" className="feed2_soc_p">+998 (90) 000 00 00</a>
              </div>
              <div className="feed2_soc">
                <img src="/image/clock.png" alt="" />
                <div className="feed2_soc_p">Пн - Пт: 09:00 - 20:00 <br />          Сб - Вс 09:00 - 15:00
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-12">
              <iframe className='contact_map' title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.916808490678!2d69.258496!3d41.288914999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ae9511ee6cb%3A0x191a7d956d375ac0!2zNDEg0YPQu9C40YbQsCDQqNC-0YLQsCDQoNGD0YHRgtCw0LLQtdC70LgsINCi0LDRiNC60LXQvdGCIDEwMDA3MA!5e0!3m2!1sru!2s!4v1662552185165!5m2!1sru!2s" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback2