import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/Books/books.json')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="mb-10">
      <h1 className="text-center text-5xl font-bold mb-10">Books</h1>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="p-5 border rounded-2xl shadow-md flex flex-col"
          >
            <img src={book.image} alt={book.bookName} className="w-full h-64 object-cover mb-4"/>

            <div className="flex gap-2 my-4">
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded-md text-sm">
                {book.genre}
              </span>
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded-md text-sm">
                Identity
              </span>
            </div>
            <h2 className="text-2xl mb-2 font-bold">{book.bookName}</h2>
            <p className="text-gray-600 mb-2">By: {book.author}</p>
            <h1 className="border-b-2 border-dashed my-2"></h1>
            <div className="flex justify-between w-full">
              <p className="text-gray-500">{book.category}</p>
              <div className="flex items-center">
                <span className="">{book.rating}</span>
                <p><FaRegStar />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
