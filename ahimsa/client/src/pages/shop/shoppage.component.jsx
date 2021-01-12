import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { asyncFetchCollection } from "../../redux/shop/shop-action";
import { CollectionContainer } from "../collection/collection.container";
import {CollectionOverviewContainer } from '../../components/collection-overview/collection-overview.container';


class ShopPage extends React.Component {
  componentDidMount() {
    const { asyncFetchCollection } = this.props;
    asyncFetchCollection();
  }

  render() {
    const { match, isLoading } = this.props;

    return (
      <div>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionOverviewContainer />
            )}
          />

          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => <CollectionContainer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  asyncFetchCollection: () => dispatch(asyncFetchCollection()),
});


export default connect(null, mapDispatchToProps)(ShopPage);
