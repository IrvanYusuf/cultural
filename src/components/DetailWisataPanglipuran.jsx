import React from "react";
// import wisata1 from "../../public/wisata/wisata1.png";
import { Link } from "react-router-dom";
import dataTempatWisata from "../data/dataTempatWisata";
const DetailWisataPanglipuran = () => {
  const wisata = dataTempatWisata[5];
  const galeryImg = dataTempatWisata[5].gallery;
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
            Penglipuran adalah salah satu desa adat dari Kabupaten Bangli,
            Provinsi Bali, Indonesia. Desa ini terkenal sebagai salah satu
            destinasi wisata di Bali karena masyarakatnya yang masih menjalankan
            dan melestarikan budaya tradisional Bali dalam kehidupan mereka
            sehari-hari. Arsitektur bangunan dan pengolahan lahan masih
            mengikuti konsep Tri Hita Karana, filosofi masyarakat Bali mengenai
            keseimbangan hubungan antara Tuhan, manusia, dan lingkungannya.
            Mereka berhasil membangun pariwisata yang menguntungkan seluruh
            masyarakatnya tanpa menghilangkan budaya dan tradisi mereka. Pada
            tahun 1995, desa Penglipuran juga mendapatkan penghargaan Kalpataru
            dari pemerintah Indonesia atas usahanya melindungi hutan bambu di
            ekosistem lokal mereka
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

export default DetailWisataPanglipuran;
