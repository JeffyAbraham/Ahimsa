import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import Collections from "../../components/collection-item/collection-item.component";
import { selectCollectionCategory } from "../../redux/shop/shop-selector";

const CollectionPage = ({ collectionItems }) => {
  console.log(collectionItems)
  const { title, items } = collectionItems;
  console.log("from collection page");

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <Collections id={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collectionItems: selectCollectionCategory(
    ownprops.match.params.collectionId,
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);
