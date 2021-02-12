import React from "react";
import FormComponent from '../form-input-component/form-input.component'
import './searchbar.style.css'

class Searchbar extends React.Component {
  render() {
    return(<div>
        <FormComponent type='search' placeholder='Search' className='form-input'/>
    </div>)
  }
}

export default Searchbar;
