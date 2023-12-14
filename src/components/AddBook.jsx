import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const AddBook = () => {
  const [books, setBooks] = useContext(BookContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const saveBook = (e) => {
    e.preventDefault();
    setBooks((prevData) => [...prevData, { name: name, price: price + "TL" }]);
    setName("");
    setPrice("");
  };
  return (
    <div>
      <form onSubmit={saveBook}>
        <input
          type="text"
          placeholder="İsim Giriniz"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fiyat Giriniz"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button disabled={!name && !price}>Ekle</button>
      </form>
    </div>
  );
};

export default AddBook;
