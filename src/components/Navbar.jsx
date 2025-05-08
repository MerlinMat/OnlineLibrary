
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-white text-2xl font-bold">Online Library 📚</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
        <Link to="/books" className="text-white hover:text-yellow-300">Browse Books</Link>
        <Link to="/add-book" className="text-white hover:text-yellow-300">Add Book</Link>
      </div>
    </nav>
  );
}
