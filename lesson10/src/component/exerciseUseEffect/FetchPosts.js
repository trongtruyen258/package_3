import { useEffect, useState } from "react";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
