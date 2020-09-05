import React from 'react';
import { Card } from 'react-bootstrap';


function PostCard({post}){
  return (
  <Card className='mr-2'>
    <Card.Header>No header</Card.Header>
    <Card.Body>
      <Card.Text>{post.text}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default PostCard;
