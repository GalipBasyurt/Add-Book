import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const [books, setBook] = useContext(BookContext);
  return (
    <div className="navbar">
      <h3>LOGO</h3>
      <p>Kitaplıktaki Kitap Sayısı: {books.length}</p>
    </div>
  );
};

export default Navbar;
