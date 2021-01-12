import React from "react";
import Loader from "react-loader-spinner";
import Spinner from "./with-spinner.styles.scss";
const withSpinner = function (WrappedComponent) {
  //it accepts a component and returns a new component with new arguments
  const Spinners = ({ isloading, ...otherprops }) => {
    if (isloading) {
      return (
        <Loader
          type="Oval"
          color="black"
          height={80}
          width={50}
          className="Spinner"
        />
      );
    } else {
      return <WrappedComponent {...otherprops} />;
    }
  };

  return Spinners;
};
export default withSpinner;
