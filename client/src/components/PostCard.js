import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';


function PostCard({post}){
  return (
  <Card className='mr-2'>
    <Card.Header>
      <Row>
        <Col>Posted by: {post.user_id}</Col>
        <Col className='text-right'>Created at: {post.created_at}</Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <Card.Text>{post.text}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default PostCard;
