import React from "react";
import "./menu-item.style.css";
import { withRouter, Link } from "react-router-dom";
//Destructure props to get title image section link
const MenuItem = ({ title, image, size, sectionLink,width,height }) => (
  <div className='display-container'>
  <Link to={`/shop/${sectionLink}`}>
    <img src={image} width={width}height={height} alt=''/>
  </Link>
  </div>
);
//wrap with withrouter for MenuItem to make use of history properties
export default withRouter(MenuItem);
