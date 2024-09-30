import axios from 'axios';
import { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Axios() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );

      setPosts(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.length === 0 && <p>Loading...</p>}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Axios;
