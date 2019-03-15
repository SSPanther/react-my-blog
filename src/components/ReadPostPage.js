import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class ReadPostPage extends React.Component {
  render() {
    console.log('rendering ReadPostPage')
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Post</h1>
                </div>
            </div>
            <div className="content-container">
                <div className="post">
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
                </div>
            </div>
        </div>
    );
  }
} 

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadPostPage);