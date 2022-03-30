import React from 'react';
import ReactDom from 'react-dom';

function Title() {
  return <div className='title'>The Title</div>;
}

function Author() {
  return <div className='author'>The Author</div>;
}

function Stats() {
  return (
    <ul className='stats'>
      <li className='rating'>"5 start"</li>
      <li className='isbn'>12-3098757-098</li>
    </ul>
  );
}

function Greeting(props) {
  return (
    <div>
      {(props.userName && `Hello ${props.userName}`) || `Not Logged in`}
    </div>
  );
}

function Book() {
  return (
    <div className='book'>
      <Greeting userName='Gopi' />
      <Title />
      <Author />
      <Stats />
    </div>
  );
}

ReactDom.render(<Book />, document.querySelector('#root'));