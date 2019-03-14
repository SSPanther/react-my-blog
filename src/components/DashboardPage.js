import React from 'react';
import { Link } from 'react-router-dom';
import BlogListFilters from './BlogListFilters';
import BlogList from './BlogList';

const DashboardPage = () => (
  <div className="content-container">
    <div className="dashboard-top">
        <div className="dashboard-filters">
            <BlogListFilters />
            <Link to="/create">Add Post</Link>
        </div>
    </div>
    <div className="dashboard-list">
        <BlogList />
    </div>
  </div>
);

export default DashboardPage;
