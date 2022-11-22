import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

const SignUp = (props) => {

  function submitHandler() {
    const userData = {
      //this allows us to grab the value from user's input
      username: document.getElementById('username').value ,
      password: document.getElementById('password').value
    }

    Axios.post('/api/signUp', userData);
    //add logic to redirect to login after signup
    props.history.push('/login');
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>Sign Up</h1>
      <input type="text" id="username"></input>
      <input type="password" id="password"></input>
      <button type="submit">Sign up</button>
      <Link to='/login'>
        <button>Already have an account? Login Here</button>
      </Link>
    </form>
  );
};

export default SignUp;
