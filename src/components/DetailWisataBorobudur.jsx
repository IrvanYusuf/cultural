import React from "react";
// import wisata1 from "../../public/wisata/wisata1.png";
import { Link } from "react-router-dom";
import dataTempatWisata from "../data/dataTempatWisata";
const DetailWisataBorobudur = () => {
  const wisata = dataTempatWisata[2];
  const galeryImg = dataTempatWisata[2].gallery;
  console.log(galeryImg);
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
            Istana Maimun adalah istana Kesultanan Deli yang merupakan salah
            satu ikon Kota Medan, Sumatera Utara. Istana ini terletak di Jalan
            Brigadir Jenderal Katamso, Aur, Medan Maimun. Istana Maimun didesain
            oleh arsitek Capt. Theodoor van Erp, seorang tentara Kerajaan
            Belanda yang dibangun atas perintah Sultan Deli, Sultan Ma'moen Al
            Rasyid. Pembangunan istana ini dimulai dari 26 Agustus 1888 dan
            selesai pada 18 Mei 1891. Istana Maimun memiliki luas sebesar 2.772
            m2 dan 30 ruangan. Istana Maimun terdiri dari 2 lantai dan memiliki
            3 bagian yaitu bangunan induk, bangunan sayap kiri dan bangunan
            sayap kanan. Bangunan istana ini menghadap ke Timur dan pada sisi
            depan terdapat bangunan Masjid Al-Mashun atau yang lebih dikenal
            dengan sebutan Masjid Raya Medan.
          </p>
          <p>
            Istana Maimun menjadi tujuan wisata bukan hanya karena usianya yang
            tua, tetapi juga desain interiornya yang unik, memadukan unsur-unsur
            warisan kebudayaan Melayu Deli, dengan gaya Islam, Spanyol, India,
            Belanda dan Italia.Namun sayang, tempat wisata ini tidak bebas dari
            kawasan Pedagang kaki lima.
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

export default DetailWisataBorobudur;
