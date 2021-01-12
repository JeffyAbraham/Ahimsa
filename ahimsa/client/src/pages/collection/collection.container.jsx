import withSpinner from "../../components/with-spinner-component/with-spinner.component";
import Collection from "./collection.component";
import { connect } from "react-redux";
import {checkShopData} from '../../redux/shop/shop-selector'

const mapStateToProp = (state) => ({
    isloading: !checkShopData(state),

  //if shopHasData is false return true , If its true then the spinner would be able to render
});

export const CollectionContainer = connect(mapStateToProp)(
  withSpinner(Collection)
);
