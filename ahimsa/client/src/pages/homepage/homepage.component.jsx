import React from "react";

import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = (props) => {
  return (
    <div>
      <div className="homepage">
        <h1>Welcome to my Homepage</h1>
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
