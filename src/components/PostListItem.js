import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({ id, title, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
      <h3 className="list-item__title">{title}</h3>
      <h3 className="list-item__data">{moment(createdAt).format('MMMM Do, YYYY')}</h3>
  </Link>
);

export default PostListItem;
