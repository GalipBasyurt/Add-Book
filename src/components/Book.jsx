import React from "react";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookList from "./BookList";

const Book = () => {
  const [books, setBooks] = useContext(BookContext);
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <BookList name={book.name} price={book.price} key={book.id} />
      ))}
    </div>
  );
};

export default Book;
