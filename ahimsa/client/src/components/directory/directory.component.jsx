import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";

const Directory = ({productSection}) => (

  <div className="directory-menu">

    {/*pass all the other propes to the menu component thats what other prop does */}
    {productSection.map(({ id, ...otherprops }) => {
      return <MenuItem key={id} {...otherprops} />;
    })}
  </div>
);

const mapStateToProps = ({directory:{productSection}}) => ({
 productSection
});

  


export default connect(mapStateToProps)(Directory) ;
