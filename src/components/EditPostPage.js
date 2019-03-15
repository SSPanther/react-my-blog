import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class EditPostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.startRemovePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    // console.log(this.props);
    // console.log(window.location.hostname);
    // console.log(window.location.href);

    const readableUrl = window.location.href.replace("edit", "read");
    const readableRoute = `/read/${this.props.post.id}`;

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Post</h1>
                </div>
            </div>
            <div className="content-container">
                <div className="link">
                    <Link 
                        to={readableRoute}>Post readable at {readableUrl}
                    </Link>
                </div>
                <PostForm 
                    post={this.props.post} 
                    mode={'edit'}
                    onSubmit={this.onSubmit}
                    onRemove={this.onRemove}
                />
            </div>
        </div>
    );
  }
} 

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: (id) => dispatch(startRemovePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);