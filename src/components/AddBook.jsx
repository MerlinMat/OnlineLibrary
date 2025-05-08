import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/BooksSlice'; 
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add unique id using Date.now()
    const newBook = {
      id: Date.now(), 
      ...formData,
    };

    dispatch(addBook(newBook)); // Dispatch action 
    navigate('/books'); // Redirect to BrowseBooks after adding
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
