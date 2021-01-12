import withSpinner from "../../components/with-spinner-component/with-spinner.component";
import CollectionOverview from './collection-overview.component'
import {connect} from 'react-redux'


const mapStateToProp = (state) => ({
    isloading: state.shop.isFetching,
    
    //if shopHasData is false return true , If its true then the spinner would be able to render
  });

 export const CollectionOverviewContainer= connect(mapStateToProp) (withSpinner(CollectionOverview))