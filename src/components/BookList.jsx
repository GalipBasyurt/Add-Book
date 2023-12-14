import React from "react";

const BookList = ({ name, price }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default BookList;
