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
            Candi Borobudur adalah sebuah candi Buddha yang terletak di
            Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak
            kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah
            barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta. Candi
            ini dibangun oleh para penganut agama Buddha Mahayana sekitar tahun
            800-an Masehi pada masa pemerintahan wangsa Syailendra. Borobudur
            adalah candi atau kuil Buddha terbesar di dunia, sekaligus salah
            satu monumen Buddha terbesar di dunia. Candi ini berbentuk piramida
            berundak yang terdiri dari 10 tingkat, yang melambangkan sepuluh
            tingkatan alam semesta dalam kepercayaan Buddha. Tingkatan-tingkatan
            ini dihiasi dengan relief-relief yang menggambarkan kisah-kisah
            Buddha dan ajaran-ajarannya.
          </p>
          <p>
            Candi Borobudur memiliki makna yang mendalam bagi umat Buddha. Candi
            ini melambangkan perjalanan spiritual manusia menuju pencerahan.
            Tingkatan-tingkatan candi melambangkan tingkatan-tingkatan kesadaran
            manusia, yang harus dilalui untuk mencapai pencerahan. Relief-relief
            yang menghiasi candi menggambarkan kisah-kisah Buddha dan
            ajaran-ajarannya, yang dapat membantu umat Buddha dalam perjalanan
            spiritual mereka.
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
