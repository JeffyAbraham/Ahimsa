import React from "react";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/menu/menu-selector.js";
import SubNav from "../navbar-component/submenu.component";
import Searchbar from '../searchbar-component/searchbar.component'
import "./submenu.styles.css";

const Menu = ({ navbar }) => {
  console.log(navbar);
  return (
    <div className="header-container">
   
      <div className='header-container-two'>
      <div className='empty'>


      </div>
      <div className="title">
        <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/daaeb583c81d0acf5b5c3496366d6988/anthro-logo.svg" />
      </div>
      <div className='search-bar'>
      <Searchbar/>
      </div>
      </div>
  
      

      <div className="navigation-container">
        {navbar.map((items) => (
          <SubNav {...items} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  navbar: selectMenu(state),
});

export default connect(mapStateToProps)(Menu);
