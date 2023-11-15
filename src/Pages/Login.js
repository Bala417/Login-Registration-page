import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [userNotExist, setUserNotExist] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handeSubmit = (e) => {
    e.preventDefault();

    const serverdata = axios
      .get("http://localhost:3001/RegisteredUser")
      .then((res) => {
        res.data.map((data) => {
          if (
            data.email === userLogin.email &&
            data.password === userLogin.password
          ) {
            return navigate("/Dashboard");
          } else setUserNotExist(true);
        });
        return userNotExist && alert("user does not exist");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(closest-side, rgba(255,255,255,1) -100%, rgba(0,128,128,1) 100%)",
      }}
    >
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handeSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-2">
              Login
            </Button>
            <Link to="/Signup">
              <Button variant="secondary" className="w-100">
                Signup
              </Button>
            </Link>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
