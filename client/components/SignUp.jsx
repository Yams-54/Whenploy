import React from 'react';
import Axios from 'axios';

const SignUp = () => {

  function submitHandler() {
    const userData = {
      //this allows us to grab the value from user's input
      username: document.getElementById('username').value ,
      password: document.getElementById('password').value
    }

    Axios.post('/api/signUp', userData);
    //add logic to redirect to login after signup
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" id="username"></input>
      <input type="password" id="password"></input>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
