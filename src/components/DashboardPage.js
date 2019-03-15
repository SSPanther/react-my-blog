import React from 'react';
import { Link } from 'react-router-dom';
import PostListFilters from './PostListFilters';
import PostList from './PostList';

const DashboardPage = () => (
  <div className="content-container">
    <div className="dashboard-top">
        <PostListFilters />
    </div>
    <div className="dashboard-list">
        <PostList />
    </div>
    <div className="dashboard-bottom">
      <Link className="button" to="/create">Add Post</Link>
    </div>
  </div>
);

export default DashboardPage;
