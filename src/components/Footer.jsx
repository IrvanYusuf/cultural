import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <footer className="mt-5 bg-black2 py-4">
      <div className="container">
        <div className="row row-gap-lg-0 row-gap-4">
          <div className="col-lg-5 col-12 d-lg-block d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={"https://i.ibb.co/6b89x5L/logo.png"}
                width={"70px"}
                alt=""
              />
              <h3 className="text-white">Cultura</h3>
            </div>
            <h6 className="text-white mt-2 text-lg-start text-center">
              Cultura adalah platform yang bertujuan untuk memperkenalkan wisata
              dan budaya yang berada di indonesia
            </h6>
            <div className="d-flex column-gap-3 text-white mt-3">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="d-flex column-gap-4">
              <div>
                <h5 className="text-white footer-title">Tentang Perusahaan</h5>
                <h6 className="fw-normal">
                  <Link className="text-decoration-none text-white">
                    Tentang Kami
                  </Link>
                </h6>
              </div>
              <div>
                <h5 className="text-white footer-title">
                  Kebijakan dan Layanan
                </h5>
                <h6 className="fw-normal">
                  <Link className="text-decoration-none text-white">
                    Kebijakan Privasi
                  </Link>
                </h6>
                <h6 className="fw-normal">
                  <Link className="text-decoration-none text-white">
                    Syarat Ketentuan
                  </Link>
                </h6>
                <h6 className="fw-normal">
                  <Link className="text-decoration-none text-white">Faq</Link>
                </h6>
              </div>
              <div>
                <h5 className="text-white footer-title">Kontak Kami</h5>
                <h6 className="fw-normal">
                  <Link className="text-decoration-none text-white">
                    <HiOutlineLocationMarker /> Medan, Sumatra Utara, Indonesia
                  </Link>
                </h6>
                <h6 className="fw-normal">
                  <Link className="text-decoration-none text-white">
                    <HiOutlinePhone /> 2345-9876-7765
                  </Link>
                </h6>
                <h6 className="fw-normal">
                  <Link className="text-decoration-none text-white">
                    <HiOutlineMail /> cultural@gmail.com
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
