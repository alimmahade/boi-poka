import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/public/data/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="flex flex-row">
        {books.map((book) => (
          <Book key={book.id} bookDetails={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
