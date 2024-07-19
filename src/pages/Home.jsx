import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>Hello World Here</div>
      <Link to="/chunkfind">Go to Chunk Finder</Link>
    </div>
  );
}

export default Home;