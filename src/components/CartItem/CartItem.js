import React from 'react';
import styles from './CartItem.module.scss'

const CartItem = (props) => {
    return (
        <div className="cartItem d-flex align-center">
            <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}
                 className="cartItemImg"></div>

            <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>49$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>
    );
};

export default CartItem;