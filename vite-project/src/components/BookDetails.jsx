import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get the books list from store
  const books = useSelector((state) => state.books);

  // Find the book with matching id compare as strings
  const book = books.find((b) => String(b.id) === id);

  // If book not found
  if (!book) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Book Not Found</h2>
        <button
          onClick={() => navigate('/books')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      {book.url && (
        <img src={book.url} alt={book.title} width="200" height="200" className="mb-4" />
      )}
      <p className="text-lg mb-2"><strong>Author:</strong> {book.author}</p>
      <p className="mb-2"><strong>Description:</strong> {book.description || 'No description available.'}</p>
      <p className="mb-4"><strong>Rating:</strong> {book.rating || 'N/A'} ⭐</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;




