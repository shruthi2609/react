import React from 'react';

function DisplayItem(props) {
    const item = props.item;
    const listItems = item.map((item) =>
      <li>{item.text}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
export default DisplayItem;