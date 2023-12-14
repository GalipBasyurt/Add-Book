import "./App.css";
import AddBook from "./components/AddBook";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <BookContextProvider>
      <div>
        <Navbar />
        <div className="book-div">
          <div>
            <h2>Kitap Listesi</h2>
            <Book />
          </div>
          <div className="add-book">
            <AddBook />
          </div>
        </div>
      </div>
    </BookContextProvider>
  );
}

export default App;
