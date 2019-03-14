import React from 'react';

const BlogForm = (props) => (
  <div>
    <form>
        <input 
            placeholder="Post title"
        />
        <textarea 
            placeholder="Post body"
        />
        <button>Save Post</button>
    </form>
  </div>
);

export default BlogForm;
