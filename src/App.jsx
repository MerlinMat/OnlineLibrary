
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import PageNotFound from './components/PageNotFound';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
