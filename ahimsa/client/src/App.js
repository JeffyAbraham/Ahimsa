import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Menu from "./components/navbar-component/menu.component";
import SiginAndSignup from "./pages/signinandsignup/sign-in-and-signup";
import Checkout from "./pages/checkout-component/checkoutpage.component";
import { userState } from "./redux/user/user-action";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { selectCollectionsForPreview } from "./redux/shop/shop-selector";
import Header from "./components/header/header.component";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { userState } = this.props;
    userState();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Menu />
      
          <Switch>
         
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            {/*if the user is signed in render the root page else render the authentication page*/}
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SiginAndSignup />
                )
              }
            />
            <Route path="/checkout" component={Checkout} />

          </Switch>
        </div>
      
    );
  }
}
//current user is passed as props from the redux store
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  collectionItems: selectCollectionsForPreview(state).map(
    ({ title, items }) => ({
      title,
      items,
    })
  ),
});

const mapDispatchToProps = (dispatch) => ({
  userState: () => dispatch(userState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
