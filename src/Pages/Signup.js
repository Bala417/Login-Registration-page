import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [passwordMatch, setPasswordMatch] = useState(false);

  const [userDetail, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    setPasswordMatch(userDetail.password === userDetail.confirmPassword);
  }, [userDetail]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordMatch) {
      axios
        .post("http://localhost:3001/RegisteredUser", userDetail)
        .then((res) => navigate("/"), alert("successfully added"))
        .catch((err) => console.log(err));
    } else {
      console.log("password does not match");
    }
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(closest-side ,rgba(255,255,255,1) -50%,rgba(0,128,128,1) 100%",
      }}
    >
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "10px",
            width: "500px",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name "
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    id="date"
                    name="dob"
                    placeholder="Date of Birth "
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Email "
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select name="gender" onChange={handleChange}>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Transgender</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    id="mobileNumber"
                    name="mobile"
                    placeholder="Mobile Number "
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="newPassword"
                    name="password"
                    placeholder="New Password "
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password "
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  type="submit"
                  variant="primary"
                  style={{ width: "200px", textAlign: "center" }}
                >
                  Register
                </Button>
              </Col>
              <Col>
                <Link to="/">
                  <Button
                    variant="secondary"
                    style={{ width: "200px", textAlign: "center" }}
                  >
                    Login
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
