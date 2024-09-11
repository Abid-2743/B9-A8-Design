import { useEffect, useState } from "react";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/Books/books.json')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);  // Log the fetched data
        setBooks(data);  // Set the books state with the fetched data
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mb-10">Books</h1>
      <h2 className="text-center text-xl mb-5">Total Books: {books.length}</h2>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.bookId} className="p-5 border rounded-lg">
            <img src={book.image} alt={book.bookName} className="w-full mb-4" />
            <h2 className="text-2xl font-bold">{book.bookName}</h2>
            <p>Author: {book.author}</p>
            <p>Review: {book.review}</p>
            <p>Rating: {book.rating}</p>
            <p>Pages: {book.totalPages}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Books;
