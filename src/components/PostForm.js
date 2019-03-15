import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    //console.log(props.onSubmit);

    this.state = {
      mode: props.mode ? props.mode : 'readonly',
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment()
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  }

  onSubmit = (e) => {
    //e.preventDefault();

    if (!this.state.title || !this.state.body) {
      this.setState(() => ({ error: 'Please provide title and body.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  }

  onRemove = (e) => {
    this.setState(() => ({ error: '' }));
    this.props.onRemove();
  }

  render() {
    return (
      <div>
        <div 
          className="form">
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input 
                className="text-input"
                placeholder="Post title"
                autoFocus
                value={this.state.title}
                onChange={this.onTitleChange}
            />
            <textarea 
                className="textarea"
                placeholder="Post body"
                value={this.state.body}
                onChange={this.onBodyChange}
            />
            <div className="input-group">
              <div className="input-group__item">
                {(this.state.mode !== 'readonly') &&
                  <button 
                    className="button" 
                    onClick={this.onSubmit}
                  >
                    Save Post
                  </button>
                }
              </div>
              <div className="input-group__item">
                {(this.state.mode === 'edit') &&
                  <button 
                    className="button button--secondary"
                    onClick={this.onRemove}
                  >
                    Remove Post
                  </button>
                }
              </div>
            </div>
        </div>
      </div>
    );
  }
}