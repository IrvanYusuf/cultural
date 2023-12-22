import React from "react";
// import wisata1 from "../../public/wisata/wisata1.png";
import { Link } from "react-router-dom";
import dataTempatWisata from "../data/dataTempatWisata";
const DetailWisataJamGadang = () => {
  const wisata = dataTempatWisata[1];
  const galeryImg = dataTempatWisata[1].gallery;
  console.log(wisata);
  return (
    <div className="container py-2">
      <div className="mt-4 wisata-info-top">
        <div className="h-100">
          <img
            src={wisata.image}
            className="w-100 h-100 rounded-3"
            alt="gambar"
          />
        </div>
      </div>
      <div className="mt-3 d-flex flex-column row-gap-2">
        <div>
          <h2>{wisata.nama}</h2>
        </div>
        <div>
          <h5>Lokasi</h5>
          <Link
            to={wisata.path}
            target="_blank"
            className="text-decoration-none text-black2"
          >
            {wisata.lokasi}
          </Link>
        </div>
        <div>
          <h5>Jumlah Pengunjung</h5>
          <span>{wisata.jml_pengunjung}/hari</span>
        </div>
        <div>
          <h5>Deskripsi</h5>
          <p style={{ textAlign: "justify" }} className="text-black2">
            Jam Gadang adalah menara jam yang menjadi penanda atau ikon Kota
            Bukittinggi, Sumatera Barat, Indonesia. Menara jam ini menjulang
            setinggi 27 meter dan diresmikan pembangunannya pada 25 Juli 1927.
            Terdapat jam berukuran besar berdiameter 80 cm di empat sisi menara
            sehingga dinamakan Jam Gadang, sebutan bahasa Minangkabau yang
            berarti "jam besar".
          </p>
          <p>
            Jam Gadang menjadi lokasi peristiwa penting pada masa sekitar
            kemerdekaan Indonesia, seperti pengibaran bendera merah putih
            (1945), Demonstrasi Nasi Bungkus (1950), dan pembunuhan 187 penduduk
            setempat oleh militer Indonesia atas tuduhan terlibat Pemerintahan
            Revolusioner Republik Indonesia (1959)
          </p>
        </div>
      </div>
      <section className="mt-3">
        <h2>Galeri</h2>
        <div className="mt-3 row galeri-container row-gap-3">
          {galeryImg.map((image, idx) => (
            <div
              className="col-lg-4 col-6"
              key={idx}
              style={{ height: "250px" }}
            >
              <img src={image} className="h-100 w-100" alt="" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailWisataJamGadang;
