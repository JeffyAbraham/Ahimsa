import React from "react";
import "./checkoutpage.component.scss";
import { connect } from "react-redux";
import {selectCartItems,SelecttotalPrice} from "../../redux/cart/cart-selector";
import StripeCheckout from '../../components/stripe-button-component/strip-button.component'
import CheckoutItem from "../../components/checkoutitem-component/checkoutitem.component";

const Checkout = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Edit</span>
      </div>
    </div>
    {cartItems.map((cartitem) => (
      <CheckoutItem key={cartitem.id} cartitem={cartitem} />
    ))}
    <div className="total">TOTAL : {totalPrice} EUR</div>

    <StripeCheckout price={totalPrice}/>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: SelecttotalPrice(state),
});

export default connect(mapStateToProps)(Checkout);
