import React from "react";
import Logo from "../assets/image/logo.png";
import "../css/footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerLeft">
          <img className="logoFooter" src={Logo} alt="logo" />
          <h6>STACK NOW</h6>
        </div>
        <div className="footerCenter">
          <p> Todos los derechos reservados</p>
        </div>
        <div className="footerRight">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </>
  );
};

export default Footer;
