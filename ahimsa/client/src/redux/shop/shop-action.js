import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.util";

export const fetchCollectionsStart = () => ({
  type: "FETCH_COLLECTIONS",
});

export const successCollection = (collectionsMap) => ({
  type: "SUCCESS_COLLECTIONS",
  payload: collectionsMap,
});

export const failedCollection = (error) => ({
  type: "FAILED_COLLECTIONS",
  payload: error,
});

export const asyncFetchCollection = () => {
  return (dispatch) => {
    setTimeout(() => {
      const collectionRef = firestore.collection("collection");
      dispatch(fetchCollectionsStart());
      collectionRef
        .get()
        .then((snapshot) => {
          const collectionMap = convertCollectionSnapshotToMap(snapshot);
           dispatch (successCollection(collectionMap))
        })
        .catch((error) => {
        dispatch(failedCollection(error))
        });
    });
  };
};
