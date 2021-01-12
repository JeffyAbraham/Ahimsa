import React from "react";
import Collection from "../collection-item/collection-item.component";
import './preview.style.scss'

const Preview = ({ title, items }) => {
  
   
  return (
    <div className="collect-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
      {items.map((item) => {
          
          return <Collection key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Preview;
