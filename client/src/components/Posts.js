import React from 'react';
import PostCard from './PostCard';
import { Container } from 'react-bootstrap';

function Posts({posts,updatePosts}) {
  return (
    <Container>
      {posts.map((post,index) => (
        <PostCard key={index} post={post} />
      ))}
    </Container>
  );
}


export default Posts;