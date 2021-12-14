import React, {useState} from "react";
import PropTypes from 'prop-types';
import axios from "axios";

async function loginUser(credentials) {
  
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

async function verifyUser(credentials){
  console.log(credentials)
  return axios.get('http://localhost:9001/users/' + credentials.username)
  .then(response => response.data)
  .catch(error => console.error(error));
}

const Login = ({setToken}) => {

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("username on submit: " + username)
        console.log("password on submit: " + password)

        let verifiedUser = await verifyUser({
          username,
          password
        });
        
        if(Object.keys(verifiedUser).length===0){
          console.log("no such username exists")
        } else{
          if(verifiedUser.password == password){
            console.log("You may login")
            const token = await loginUser({
              username,
              password
            });
            setToken(token);
          } else{
            console.log("Wrong password")
          }
        }
      
      }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUsername(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
