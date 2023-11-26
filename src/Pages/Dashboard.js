import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Dashboard = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,1) -100%, rgba(0,128,128,1) 100%)",
          width: "100vw",
          color: "white",
          height: "100vh",
        }}
      >
        <h1 className="text-center">Welcome to Dashboard</h1>
      </Container>
    </div>
  );
};

export default Dashboard;
