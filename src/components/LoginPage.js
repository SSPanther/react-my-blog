import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startGithubLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startGithubLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">My Blog</h1>
      <p>For all my thoughts and feelings</p>
      <div className="content-container">
        <div className="box-layout__button">
          <button className="button" onClick={startGoogleLogin}>Login with Google</button>
        </div>
        <div className="box-layout__button">
          <button className="button" onClick={startGithubLogin}>Login with GitHub</button>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
