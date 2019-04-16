import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Hello There!</h1>
      <div>
        You are going to understand the basics of Firebase by the end
        of this article.
      </div>
      <Link className="links" to="/login">Login</Link>
      <Link className="links" to="/signup">Signup</Link>
      <Link className="links" to="/protected">VIP Section</Link>
    </div>
  );
}

export default Home;
