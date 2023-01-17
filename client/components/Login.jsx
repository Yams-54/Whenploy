import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

const Login = (props) => {
console.log('hello in login');
    function submitHandler(e) {
      e.preventDefault();
    const userData = {
      //this allows us to grab the value from user's input
      username: document.getElementById('username').value ,
      password: document.getElementById('password').value
    }

    Axios.post('/api/login', userData)
        .then((data) => {
            console.log('data', data)
            if(data.data.allowed) props.history.push('/allApplications');
            else {
                alert('invalid username or password');
            }
        })
        .catch((err) =>
            console.log('error'),
        );
    }
  

  return (
    <form className='signUpForm' onSubmit={submitHandler}>
      <div className='box'>
        <h1>Whenploy</h1>
        <div className='inputs'>
          <input className="inputUser" type="text" id="username" placeholder='username'></input>
          <input className="inputPW" type="password" id="password" placeholder='password'></input>
          <button className="signUpBtn" type="submit">Log in</button>
        </div>
        <div className='redirect'>
          <span className="redirectButton">Don't have an account? <Link id='link' to='/'>Sign Up Here</Link></span>
        </div>
      </div>
    </form>
  );
};

export default Login;
