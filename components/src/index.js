import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard />
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45PM'
        content='Hey that is pretty slick!'
        avatar={faker.image.image()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 2:00AM'
        content='Woah dude.'
        avatar={faker.image.image()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 5:00PM'
        content='Wow!'
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
