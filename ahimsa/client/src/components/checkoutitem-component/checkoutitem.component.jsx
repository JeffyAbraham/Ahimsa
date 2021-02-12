import React from "react";
import "./checkoutitem.component.scss";
import {
  removeItem,
  reduceQuantity,
  increaseQuantity,
} from "../../redux/cart/cart-action";
import { connect } from "react-redux";

const CheckoutItem = ({
  cartitem: { name, imageUrl, price, quantity },
  removeItem,
  cartitem,
  reduceQuantity,
  increaseQuantity,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"></img>
    </div>
    <span className="name">{name}</span>

    <span className="quantity">
      <div className="arrow" onClick={() => reduceQuantity(cartitem)}>
        &#10094;
      </div>
      {quantity}
      <div className="arrow" onClick={() => increaseQuantity(cartitem)}>
        &#10095;
      </div>
    </span>
    <span className="price">{price}</span>
    <span
      className="remove-button"
      onClick={() => {
        removeItem(cartitem);
      }}
    >
      &#10005;
    </span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  reduceQuantity: (item) => dispatch(reduceQuantity(item)),
  increaseQuantity: (item) => dispatch(increaseQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
