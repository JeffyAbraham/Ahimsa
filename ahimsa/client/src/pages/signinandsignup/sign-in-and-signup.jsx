import React from "react";
import "./sign-in-and-signup.scss";
import Sigin from "../../components/sigin/sigin.component";
import SignUp from "../../components/sign-up-component/signup-up-component";

const SiginAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Sigin />
      <SignUp />
    </div>
  );
};

export default SiginAndSignup;
