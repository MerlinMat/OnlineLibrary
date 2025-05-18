// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  const popularBooks = [
    { id: 1, title: 'Dune' },
    { id: 4, title: "Charlotte's Web" },
    { id: 6, title: "Nancy Drew Series" },
    { id: 7, title: 'The Westing Game' },
    { id: 8, title: 'A Wrinkle in Time' },
    { id: 10, title: 'Hidden Figures' },
    { id: 11, title: 'Brown Girl Dreaming' },
    { id: 13, title: 'Becoming' },
    { id: 14, title: 'Murder on the Orient Express' },
    { id: 16, title: 'Gone Girl' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Welcome to the Online Library! 🎉</h2>
      <p className="mb-6">Find your next favorite book among various categories.</p>

      <h3 className="text-2xl mb-2">Categories:</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'].map((cat) => (
          <li key={cat} className="bg-blue-200 p-4 rounded shadow hover:bg-blue-50">{cat}</li>
        ))}
      </ul>

      <h3 className="text-2xl mb-8">Popular Books:</h3>
      <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        {popularBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`} className="inline-block hover:underline hover:text-red-500 transform hover:scale-110 transition duration-300">{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
