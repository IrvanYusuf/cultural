import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-10 mx-auto">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center mb-4">
            <img
              src="https://i.ibb.co/QnWD6Kb/profile.png"
              width={"130px"}
              alt=""
            />
            <div className="profile-bio">
              <h3>Budi Raharjo</h3>
              <h5>Medan, Sumatra Utara</h5>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-6 col-12 mb-3">
                <h5>Nama Depan</h5>
                <h6 className="border py-3 px-3 rounded-4">Budi</h6>
              </div>
              <div className="col-lg-6 col-12 mb-3">
                <h5>Nama Belakang</h5>
                <h6 className="border py-3 px-3 rounded-4">Raharjo</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 mb-3">
                <h5>Email</h5>
                <h6 className="border py-3 px-3 rounded-4">budi@gmail.com</h6>
              </div>
              <div className="col-lg-6 col-12 mb-3">
                <h5>No Hp</h5>
                <h6 className="border py-3 px-3 rounded-4">082245637765</h6>
              </div>
            </div>
            <div>
              <button className="btn btn-primary w-100 py-2">
                Ubah Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
