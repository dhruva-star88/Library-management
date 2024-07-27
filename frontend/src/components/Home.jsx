import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import { VITE_BACKEND_URL } from '../App';

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await fetch(`${VITE_BACKEND_URL}/api/login`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          toast.success(`Login successfully`);
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          setTimeout(() => {
            window.location.href = "./dashboard/dashboard";
          }, 2000);
        } else if (data.status === "notlogin") {
          toast.warning(`Login Failed`);
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
        if (data.status === "error") {
          toast.error("Login failed");
        }
      });
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center mb-4">
<h1 className="text-4xl italic text-center text-g        reen-600">Enchanted Wisdom Library</h1>
      </Row>
      <Row>
        <Col sm={8}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                style={{ width: "100%", height: "320px" }}
              />
              <Carousel.Caption className="slide-description">
                <h5>Library Slide 1</h5>
                <p>
                  This school library is a great help to us because here we
                  learn many things by reading different types of books.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                style={{ width: "100%", height: "320px" }}
              />
              <Carousel.Caption className="slide-description">
                <h5>Library Slide 2</h5>
                <p>
                  This library is for all our fellow students so that we can
                  advance our studies.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                style={{ width: "100%", height: "320px" }}
              />
              <Carousel.Caption className="slide-description">
                <h5>Library Slide 3</h5>
                <p>
                  It's really quiet so you can focus on your studies here in
                  the library.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={4}>
          <Card className="shadow-lg">
            <Card.Header as="h5">Login User</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <Form.Control
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </div>
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                    />
                  </div>
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Sign In
                </Button>
              </Form>
              <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                Don't have an account? <Link to="/register">Register</Link>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
