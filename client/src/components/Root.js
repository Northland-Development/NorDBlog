import React from 'react';
import Posts from './Posts';
import { Container, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';


function Root({posts,updatePosts}) {
  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to NorDBlog!</h1>
        <ButtonToolbar>
            <Button className='mr-2' onClick={() => console.log('Logining In')}>Login</Button>
            <Button className='mr-2' onClick={() => console.log('Creating Account')}>Create Account</Button>
        </ButtonToolbar>
      </Jumbotron>
      <Posts posts={posts} updatePosts={updatePosts} />
    </Container>
  );
}

export default Root;
