import React from "react";
import dataTarian from "../data/dataTarian";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
const DaftarTarian = () => {
  return (
    <div className="container py-3">
      <h2>Tarian Tradisional</h2>
      <div className="row row-gap-3 mt-4">
        {dataTarian.map((tarian, idx) => (
          <Link
            to={`/kategori/tarian/${tarian.link}`}
            className="card-category col-lg-4 col-md-6 col-12 text-decoration-none text-black2 position-relative d-flex justify-content-center"
            key={idx}
          >
            <div style={{ height: "240px" }} className="w-100">
              <img
                src={tarian.image}
                alt=""
                className="w-100 h-100 rounded-3"
              />
            </div>
            <div
              className="position-absolute bottom-0 mb-2 p-2 rounded-3 bg-white"
              style={{ width: "80%" }}
            >
              <h5 className="mt-1">{tarian.nama}</h5>
              <span className="mt-1 d-flex align-items-center column-gap-1">
                <HiOutlineLocationMarker size={"18px"} /> {tarian.asal}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DaftarTarian;
