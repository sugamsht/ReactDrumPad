  import React from 'react'
  
  
  export default function Border(props) {
    return (
      <div
        className="Border"
        style={{ border: `7px solid ${props.borderColor}` }}
      >
        {props.children}
      </div>
    );
  }