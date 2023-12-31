import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { decrementQuantity, deleteFromBasket, incrementQuantity } from '../../redux/reducers/basketSlice';
import { WishlistButton } from '../WishlistButton';

export const CartItem = ({ id, thumbnail, name, quantity, price, discountPercentage, color, size }) => {
    const dispatch = useDispatch();
    const newItem = {
        id,
        name,
        thumbnail,
        price,
        discountPercentage,
        color,
        size
    }
    return (
        <div className="cart-item col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center">
            <div className="cart-image col-lg-2 col-md-2 col-sm-3 col-4">
                <NavLink to={`/product/${id}`}>
                    <img
                        className="img-fluid"
                        src={thumbnail}
                        alt="Image"
                    />
                </NavLink>
            </div>
            <div className="cart-detail col-lg-10 col-md-10 col-sm-9 col-8 d-flex flex-column gap-2 px-3">
                <div className="top d-flex justify-content-between">
                    <h5>
                        <NavLink to={`/product/${id}`}>{name}</NavLink>
                    </h5>
                    <span className="total">{`${quantity * price}$`}</span>
                </div>
                <div className="middle d-flex flex-column gap-2">
                    {size &&
                        <div>
                            <span>Size:</span>
                            <span>{size}</span>
                        </div>
                    }
                    
                    <div>
                        <span>Color:</span>
                        <span>{color}</span>
                    </div>
                    <div>
                        <span>Price:</span>
                        <span>{`${price}$`}</span>
                    </div>
                </div>
                <div className="bottom d-flex justify-content-between align-items-center">
                    <div className="product-quantity col-lg-2 col-md-2 col-sm-3 col-5">
                        <button type='button' className="decrease" disabled={quantity > 1 ? false : true} onClick={() => dispatch(decrementQuantity(id))}>
                            <i className="fa-solid fa-minus" />
                        </button>
                        <input type="text" value={quantity} />
                        <button type='button' className="increase" onClick={() => dispatch(incrementQuantity(id))}>
                            <i className="fa-solid fa-plus" />
                        </button>
                    </div>
                    <div className="product-action d-flex align-items-center gap-3">
                        <WishlistButton id={id} newItem={newItem} />
                        <button type='button' className="removefromlist" onClick={() => dispatch(deleteFromBasket(id))}>
                            <i className="fa-solid fa-trash" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
