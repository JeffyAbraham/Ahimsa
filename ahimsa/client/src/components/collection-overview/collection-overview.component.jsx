import React from "react";
import { connect } from "react-redux";
import "./collection-overview.component.scss";
import Preview from "../preview-component/preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";

const CollectionOverview = ({ setShopData }) => {
  return (
    <div className="collections-overview">
      {setShopData.map(({ id, ...othercollectionprops }) => {
        return <Preview key={id} {...othercollectionprops} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  setShopData: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionOverview);
