import React from "react";
import "./submenu.styles.css";

export const SubNav = ({ Title, Link, Items }) => (
  <div className="navigation-panel">
    {Title}
    <div className="navigation-panel-subnav">
      {Items.map((subItem) => (
        <div>{subItem.Title}</div>
      ))}
    </div>
  </div>
);

export default SubNav;
