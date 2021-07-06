import React from 'react'
import Subtotal from './Subtotal';
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad-badge" />

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>you have no items in your basket. To buy one or more items,click "Add to Basket" Next to the item</p>
                    </div>
                ) :
                    (<div >
                        <h3>Hello,{user?.email}</h3>
                        <h2 className="checkout_title">Shopping Basket</h2>
                    </div>)
                }

                {
                    basket.map((item) => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image} />

                    ))
                }
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
