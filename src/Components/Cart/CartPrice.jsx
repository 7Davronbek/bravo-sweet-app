import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE } from '../../redux/actions/cartAction'

const CartPrice = () => {

    const [price, setPrice] = useState(0)
    const getdata = useSelector(state => state.cartReducer.carts)

    const dispatch = useDispatch()

    const deleteProduct = id => {
        dispatch(DELETE(id))
    }

    // TOTAL PRICE
    const totals = () => {
        let price = 0
        getdata.map(item => {
            price = parseFloat(item.price) * item.qty + price})
        setPrice(price)
    }


    useEffect(() => {
        totals()
    }, [totals])

    return (
        <div className='CartPrice'>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPrice