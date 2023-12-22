import React from "react";

const Kontak = () => {
  return (
    <div className="container py-4">
      <div>
        <h2 className="text-center">Kontak Kami</h2>
      </div>
      <div className="row">
        <div className="col-lg-8 col-10 mx-auto">
          <form>
            <div class="mb-3">
              <label for="nama" class="form-label">
                Nama
              </label>
              <input
                type="text"
                class="form-control bg-white py-2 rounded-4"
                id="nama"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control bg-white py-2 rounded-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email@gmail.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Pesan
              </label>
              <textarea
                className="form-control rounded-4"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-100 py-2">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
