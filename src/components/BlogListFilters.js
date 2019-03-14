import React from 'react';

export class BlogListFilters extends React.Component {

  render() {
    return (
      <div>
        <input 
          type="text"
          placeholder="Search posts"
        />
        <select>
            <option>By Title</option>
        </select>
      </div>
    );
  }
}

export default BlogListFilters;
