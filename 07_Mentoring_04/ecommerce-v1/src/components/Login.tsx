
import {Form, Button, Alert} from "react-bootstrap";

import {useRef, useState, FormEvent} from "react";

import {users} from "../users";

import {useNavigate} from "react-router-dom";

const Login = () => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [error, setError] = useState('');

  const doLogin = (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const userSupliedUsername = usernameRef?.current?.value
    const userSuppliedPassword = passwordRef?.current?.value
    // Username
    // Password

    const matchedCredentials = users.users.find( (userData) => {

      let result : boolean = 
      (userData.username === userSupliedUsername && 
      userData.password === userSuppliedPassword)

      console.log(result);

      return result;

    })

    if (matchedCredentials){

      // Success Scenario
      navigate("/home")
    }else{

      // Failure Scenario
      setError("Username or Password is incorrect");
    }

  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">

      <h3>Login Form</h3>

      <Form onSubmit={doLogin}>
        
        {          
          (error) && (

          <Alert key="danger" variant="danger">
            {error}
          </Alert>
          )
        }

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" ref={usernameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
        </Form.Group>
          
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

    </div>
  )

}

export {Login}
