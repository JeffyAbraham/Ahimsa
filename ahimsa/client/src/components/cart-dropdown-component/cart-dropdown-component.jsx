import React from "react";
import CustomButton from "../button-component/button.component";
import "./cart-dropdown-component.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item-component/cart.item.component";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { withRouter } from "react-router";
import { setCartItem } from "../../redux/cart/cart-action";
//import withRouter because we need access to this.history.push which is not available to this component

const CartDropdown = ({ cartItems, history,setCartItem }) => (
  <div>
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() =>{setCartItem();(history.push("/checkout"));}} isInverted>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  </div>
);
//state will pass the state store and from the state extract cart and from the cart extract cartItems
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCartItem: () => dispatch(setCartItem()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
