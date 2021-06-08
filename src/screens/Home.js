import React from 'react';
import { useHistory } from 'react-router';
import { isLoggedInVar, logUserOut } from '../apollo';

const Home = () => {
  const history = useHistory()
  return (<div>
    <h1>
      Welcome!
    </h1>
    <button onClick={() => logUserOut(history)}>Login out now!</button>
  </div>);
}

export default Home;