import { useState, useEffect } from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import "./App.css";

function Project() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((response) => response.json())
      .then((data) => setPosts(data.data.children))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="App">
        <h1 className="header1">React.js Posts</h1>
        <div className="posts1">
          {posts.map((post) => (
            <div key={post.data.id} className="post">
              <h2 className='header2'>{post.data.title}</h2>
              <p className='p2' dangerouslySetInnerHTML={{ __html: post.data.selftext_html }}></p>
              <a className='a3' href={post.data.url} target="_blank" rel="noreferrer">
                {post.data.url}
              </a>
              <p className='score2'>Score: {post.data.score}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Project;
