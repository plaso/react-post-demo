import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getPost } from '../services/baseService';

const Post = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()


  useEffect(() => {
    getPost(id).then(response => {
      setLoading(false)
      setPost(response)
    })
  }, [id])

  useEffect(() => {
    console.log('mounting')

    return () => {
      console.log('unmount')
    }
  }, [])

  console.log('render')
  return (
    <div>
      {loading
        ? (<p>Loading...</p>)
        : <p>{post && post.title}</p>}
      <Link to={`/posts/${Number(id) + 1}`}>Next post</Link>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default Post;