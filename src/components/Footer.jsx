import React from "react";
import Logo from "../assets/image/logo.png";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  return (
    // <div className="container">
    //   <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2">
    //     <Col className="col-md-4 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    //       <Image className="logoFooter" src={Logo} alt="logo" />
    //       <p>STACK NOW</p>
    //     </Col>
    //     <Col className="col-md-4 d-flex align-items-center justify-content-center">
    //       <span className="mb-3 mb-md-0 text-body-secondary ">
    //         &copy; Todos los derechos reservados
    //       </span>
    //     </Col>
    //     <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    //       <li className="ms-3">
    //         <a href="http://www.facebook.com" className="text-body-secondary">
    //           <BsFacebook />
    //         </a>
    //       </li>
    //       <li className="ms-3">
    //         <a href="http://www.instagram.com" className="text-body-secondary">
    //           <BsInstagram />
    //         </a>
    //       </li>
    //       <li className="ms-3">
    //         <a href="http://www.twitter.com" className="text-body-secondary">
    //           <BsTwitter />
    //         </a>
    //       </li>
    //     </ul>
    //   </footer>
    // </div>

    <div className="containerFooter">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 mx-5">
        <Col className="col-md-4 px-2 mt-2">
          <Link to="/" className="text-decoration-none link">
            <Image className="logoFooter" src={Logo} alt="logo" />
            <p className="text-black fw-bold">STACK NOW</p>
          </Link>
        </Col>
        <Col className="col-md-4 d-flex align-items-center justify-content-center">
          <span className="mb-3 mb-md-0 mt-3 text-black fw-bold">
            &copy; Todos los derechos reservados
          </span>
        </Col>
        <ul className="nav col-md-4 mt-2 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="http://www.facebook.com" className="text-black">
              <BsFacebook />
            </a>
          </li>
          <li className="ms-3">
            <a href="http://www.instagram.com" className="text-black">
              <BsInstagram />
            </a>
          </li>
          <li className="ms-3">
            <a href="http://www.twitter.com" className="text-black">
              <BsTwitter />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;

{
  /* <div className="container">
   <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2">
     <Col className="col-md-4 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
       <Image className="logoFooter" src={Logo} alt="logo" />
       <p>STACK NOW</p>
     </Col>
     <Col className="col-md-4 d-flex align-items-center justify-content-center">
       <span className="mb-3 mb-md-0 text-body-secondary ">
         &copy; Todos los derechos reservados
       </span>
     </Col>
     <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
       <li className="ms-3">
         <a href="http://www.facebook.com" className="text-body-secondary">
           <BsFacebook />
         </a>
       </li>
       <li className="ms-3">
         <a href="http://www.instagram.com" className="text-body-secondary">
           <BsInstagram />
         </a>
       </li>
       <li className="ms-3">
         <a href="http://www.twitter.com" className="text-body-secondary">
           <BsTwitter />
         </a>
       </li>
     </ul>
   </footer>
 </div>  */
}
