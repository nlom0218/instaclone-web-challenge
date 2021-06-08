import React from 'react';
import { isLoggedInVar, logUserOut } from '../apollo';

const Home = () => {
  return (<div>
    <h1>
      Welcome!
    </h1>
    <button onClick={() => logUserOut()}>Login out now!</button>
  </div>);
}

export default Home;