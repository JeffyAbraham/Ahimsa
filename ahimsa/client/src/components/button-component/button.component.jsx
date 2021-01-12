  
import React from 'react';

import './button.style.scss';
     
const CustomButton = ({ children, isGoogleSignIn,isInverted, ...otherProps }) => (
  <button
    className={`${isInverted?'isInverted':''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;