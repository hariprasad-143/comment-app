import React from 'react';

import CommentSection from './components/CommentSection';
import './styles.css';

const App = () => {
  return (
    <div className='app'>
      <h1>Interactive Comment Section</h1>
      <CommentSection />
      
    </div>
  );
};

export default App;