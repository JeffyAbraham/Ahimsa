import React from "react";
import "./cart-icon-component.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { setCartItem } from "../../redux/cart/cart-action";
import { cartItemsCount } from "../../redux/cart/cart-selector";

const CartIcon = ({ setCartItem, totalItem }) => (
  <div className="cart-icon" onClick={setCartItem}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalItem}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setCartItem: () => dispatch(setCartItem()),
});
const mapStateToProps = (state) => ({
  totalItem: cartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
