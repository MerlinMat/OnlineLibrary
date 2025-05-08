import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BrowseBooks = () => {
  const { category } = useParams(); // for dynamic category filtering
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books based on category and search term
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Browse Books</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4 w-full max-w-md"
      />

      {/* Books List */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <div key={book.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="mb-2"><strong>Author:</strong> {book.author}</p>
            <Link
              to={`/book/${book.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
