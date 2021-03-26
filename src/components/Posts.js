import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/baseService';


class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }

  }

  componentDidMount() {
    getPosts()
      .then(posts => this.setState({ posts, loading: false }))
  }

  render() {
    console.log('render')
    return (
      <div>
        {
          this.state.loading
            ? (
              <p>Loading...</p>
            ) : (
              <div>
                {this.state.posts.map(post => (
                  <div key={post.id}>
                    <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
                    <p>{post.body}</p>
                  </div>
                ))}
              </div>
            )
        }
      </div>
    );
  }
}

export default Posts;