import React from 'react';
import Router from 'next/router';
import Spinner from '../components/Spinner';
import firebase from '../firebase';

const withAuth = Component => () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setLoading(false);
      } else {
        Router.push('/');
      }
    });
  });

  if (loading) {
    return <Spinner />;
  } else if (false) {
    return <Component {...this.props} />;
  }
};
export default withAuth;
