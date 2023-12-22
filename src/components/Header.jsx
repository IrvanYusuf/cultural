import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";

const Header = () => {
  const [idUser, setIdUser] = useState("");

  const getIdUserLocalStorage = () => {
    const id = localStorage.getItem("id");
    if (id) {
      setIdUser(id);
    }
  };

  useEffect(() => {
    getIdUserLocalStorage();
  }, []);
  return (
    <Navbar expand="lg" className="bg-white border-bottom fixed-top">
      <Container>
        <Navbar.Brand className="fs-3 fw-bold">
          <Link to={"/"} className="text-dark text-decoration-none">
            <img
              src={"https://i.ibb.co/6b89x5L/logo.png"}
              alt=""
              width={"70px"}
            />
            <span>Cultura</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="shadow-none">
          <HiBars3CenterLeft className="putar" size={"30px"} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex column-gap-3 row-gap-lg-0 row-gap-2">
            <Link
              to={""}
              className="text-decoration-none text-black fw-semibold"
            >
              Home
            </Link>
            <Link
              to={"/tentang-kami"}
              className="text-decoration-none text-black fw-semibold"
            >
              Tentang Kami
            </Link>
            <Link
              to={"/kontak"}
              className="text-decoration-none text-black fw-semibold"
            >
              Kontak
            </Link>
          </Nav>
          <div className="ms-auto">
            {idUser ? (
              <Link to={"/profile"}>
                <img
                  src={"https://i.ibb.co/QnWD6Kb/profile.png"}
                  width={"60px"}
                  alt=""
                />
              </Link>
            ) : (
              <div className="d-flex column-gap-3 mt-lg-0 mt-3 flex-lg-row flex-column row-gap-2">
                <Link
                  to={"/register"}
                  className="btn btn-outline-primary py-lg-2 py-2 px-4"
                >
                  Register
                </Link>
                <Link
                  to={"/login"}
                  className="btn btn-primary py-lg-2 py-2 px-4"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
