import React from 'react';

import './App.css';

import Header from '../Header/Header.jsx';
import BucketListContainer from '../../containers/BucketListContainer';

const App = () => (
  <div className="app__container">
    <Header className="app__header" />
    <div className="buckets app_content">
      <BucketListContainer />
    </div>
  </div>
);

export default App;
