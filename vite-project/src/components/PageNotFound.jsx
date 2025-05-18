
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl mb-4">404 - Page Not Found 😢</h2>
      <p className="mb-4">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
    </div>
  );
}
