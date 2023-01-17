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
    <form className="signUpForm" onSubmit={submitHandler}>
      <div className='box'>
        <h1>Whenploy</h1>
        <div className='inputs'>
          <input className="inputUser" type="text" id="username" placeholder='username'></input>
          <input className="inputPW" type="password" id="password" placeholder='password'></input>
          <button className="signUpBtn" type="submit">Sign up</button>
        </div>
        <div className='redirect'>
            <span className="redirectButton">Already have an account? <Link id='link' to='/login'>Login Here</Link></span>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
