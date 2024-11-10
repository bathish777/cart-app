import React from 'react'
import { useGlobalContext } from '../../Hooks/Context'

const CartItem = ({ id, img, title, price, amount }) => {
    const { remove, toggleAmount } = useGlobalContext()

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />

            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>{price}</h4>
                <button className='remove-btn' onClick={() => remove(id)}>remove</button>
            </div>
            <div>
                <button className='amount-btn' onClick={() => toggleAmount(id, "inc")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{ width: '24px', height: '24px', fill: '#007bff' }}
                    >
                        <path d="M413.5 329.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 205.3l176.2 176.2c12.5 12.5 32.8 12.5 45.3 0z" />
                    </svg>
                </button>

                <p className='amount'>{amount}</p>

                <button className='amount-btn' onClick={() => toggleAmount(id, "dec")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{ width: '24px', height: '24px', fill: '#007bff' }}
                    >
                        <path d="M34.5 182.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 306.7 79.8 127.1c-12.5-12.5-32.8-12.5-45.3 0z" />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default CartItem
