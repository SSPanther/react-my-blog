import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startGoogleLogin = () => {
  return () => {
    console.log('Signing in with Google');
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startGithubLogin = () => {
  return () => {
    console.log('Signing in with Github');
    return firebase.auth().signInWithPopup(githubAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
