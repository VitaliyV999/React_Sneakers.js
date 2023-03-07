import React from 'react';
import CartItem from "./CartItem/CartItem";

const Drawer = (props) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-25">Корзина<img onClick={props.onClickCart} className="removeBtn cu-p"
                                                                         src="/img/btn-close.svg" alt="Close"/></h2>
                <div className="items">
                    <CartItem />
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>98$</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div className="nalogDashed"></div>
                            <b>4,9$</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;