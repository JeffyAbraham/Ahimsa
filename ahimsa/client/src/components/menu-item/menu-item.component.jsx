import React from "react";
import "./menu-item.style.scss";
import { withRouter, Link } from "react-router-dom";
//Destructure props to get title image section link
const MenuItem = ({ title, image, size, sectionLink }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className={`${size} menu-item`}
  >
    <Link to={`/shop/${sectionLink}`}>
      <button>
        <div className="content">
          <div className="title">{title.toUpperCase()}</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </button>
    </Link>
  </div>
);
//wrap with withrouter for MenuItem to make use of history properties
export default withRouter(MenuItem);
