import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { name: "Adım Kırmızı", price: "55tl", id: 1 },
    { name: "Hayvanlar Çiftliği", price: "35tl", id: 2 },
    { name: "Suç ve Ceza", price: "75tl", id: 3 },
    { name: "Martı", price: "25tl", id: 4 },
  ]);
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
