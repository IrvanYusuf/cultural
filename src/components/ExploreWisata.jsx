import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import dataTempatWisata from "../data/dataTempatWisata";
const ExploreWisata = () => {
  return (
    <div className="mt-5 container" id="wisata">
      <h2>Explore Tempat Wisata</h2>
      <div className="row row-gap-3 mt-4">
        {dataTempatWisata.map((wisata) => (
          <Link
            to={`/detail/${wisata.link}`}
            className="card-category col-lg-4 col-12 text-decoration-none text-black2 position-relative d-flex justify-content-center"
            key={wisata.id}
          >
            <div style={{ height: "240px" }} className="w-100">
              <img
                src={wisata.image}
                alt=""
                className="w-100 h-100 rounded-3"
              />
            </div>
            <div
              className="position-absolute bottom-0 mb-2 p-2 rounded-3 bg-white"
              style={{ width: "80%" }}
            >
              <h5 className="mt-1">{wisata.nama}</h5>
              <span className="mt-1 d-flex align-items-center column-gap-1">
                <HiOutlineLocationMarker size={"18px"} /> {wisata.lokasi}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreWisata;
