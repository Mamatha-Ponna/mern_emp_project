import React, { useContext, useState } from "react";
import "./emp_LogIn.css";
import { Form, Button, Alert, FormControl, Col } from "react-bootstrap";
import { postRequest } from "../../../utils/apiRequest";
import { userContext } from "../../context";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (username.length !== 8) {
    //   setError("Username must be 8 characters long.");
    //   return;
    // }
    // if (password.length !== 12) {
    //   setError("Password must be 12 characters long.");
    //   return;
    // }
    let data = await postRequest("login", { username: username, password: password });
    localStorage.setItem("authStatus", true);
    localStorage.setItem("userData", JSON.stringify(data[0]));
    setUsername("");
    setPassword("");
    setError("");
    window.location.reload();
  };
  return (
    <div className="LoginPage">
      <nav className="h1Tag">Login</nav>
      <Col className="ColInput">
        <Form onSubmit={handleSubmit} className="FormSubmit">
          <h5 align="center" className="mt-2">
            Employee LogIn
          </h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group as={Col} className="FormGroup">
            <Form.Label>UserName</Form.Label>
            <FormControl
              className="FormControl"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="FormGroup">
            <Form.Label>Password</Form.Label>
            <FormControl
              className="FormControl"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </div>
  );
}

export default Login;
