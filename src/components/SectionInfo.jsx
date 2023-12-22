import React from "react";
import video from "../assets/video1.mp4";
const SectionInfo = () => {
  return (
    <div className="mt-5 container">
      <div className="d-flex">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="video-container w-100 rounded-4"
        ></video>
      </div>
      <div className="row mt-4 text-center flex-lg-row flex-column">
        <div className="col-lg-3 col-12 card-info py-4">
          <h3>
            17000 <span className="fs-5">Pulau</span>
          </h3>
        </div>
        <div className="col-lg-3 col-12 card-info py-4">
          <h3>
            5 <span className="fs-5">Pulau Besar</span>
          </h3>
        </div>
        <div className="col-lg-3 col-12 card-info py-4">
          <h3>
            1340 <span className="fs-5">Suku Bangsa</span>
          </h3>
        </div>
        <div className="col-lg-3 col-12 card-info py-4">
          <h3>
            6 <span className="fs-5">Agama</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
