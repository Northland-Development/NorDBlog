import React from 'react';
import { Button } from 'react-bootstrap';

function Posts({counter,addCounter}) {
  return (
    <div>
      <h2>Posts</h2>
      <Button onClick={() => addCounter(counter)} className='mr-2'>increment the counter</Button>
    </div>
  );
}
// {/* <Button onClick={() => setCounter(counter-1)} className='mr-2'>decrement the counter</Button> */}

export default Posts;
