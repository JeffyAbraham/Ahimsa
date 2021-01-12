import { useRef } from "react";
import {
  signInWithGoogle,
  createUser,
  getCurrentUser,
} from "../../firebase/firebase.util";
import { auth } from "../../firebase/firebase.util";

//Action creators
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const sigOutUser = () => ({
  type: "SIGNOUT_USER",
});

export const setError = () => ({
  type: "SET_ERROR",
  payload:
    "Something might have went wrong , Did you check the Internet connection :(",
});

//thunk async functions

export const signInWithGoogleMail = () => {
  return (dispatch) => {
    signInWithGoogle()
      .then(({ user }) => {
        createUser(user, user.displayName).then((userRef) => {
          userRef.onSnapshot((onSnapshot) => {
            dispatch(
              setCurrentUser({
                id: onSnapshot.id,
                data: { ...onSnapshot.data() },
              })
            );
          });
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
};


export const signInWithEmailAndPasword = (email, password) => {
  return (dispatch) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        createUser(user, user.displayName).then((userRef) => {
          userRef.onSnapshot((onSnapshot) => {
            dispatch(
              setCurrentUser({
                id: onSnapshot.id,
                data: { ...onSnapshot.data() },
              })
            );
          });
        });
      })
      .catch(() => {
        dispatch(setError());
      });
  };
};

//Sigup implement the user


//Signs out the user
export const signOutUser = () => {
  return (dispatch) => {
    getCurrentUser()
      .then((userRef) => {
        dispatch(setCurrentUser(userRef));
      })
      .catch(() => dispatch(setError));
  };
};


//Set the current state of app when on component did mount
export const userState = () => {
    return (dispatch) => {
      getCurrentUser()
        .then((userRef) => {
          createUser(userRef, userRef.displayName).then((userRef) => {
            userRef.onSnapshot((onSnapshot) => {
              dispatch(
                setCurrentUser({
                  id: onSnapshot.id,
                  data: { ...onSnapshot.data() },
                })
              );
            });
          });
        })
        .catch(() => dispatch(setError));
    };
  };