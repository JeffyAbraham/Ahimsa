import { createSelector } from "reselect";
const selectShopData = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShopData],
  (selectShopData) => selectShopData.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollectionCategory = (collectionId, state) => {
  if (state.shop.collections) {
    return state.shop.collections[collectionId];
  } else {
    return null;
  }
};
export const checkShopData = createSelector(
  [selectShopData],
  (shop) => !!shop.collections
  //if collection is loaded return true or else false
  
);
