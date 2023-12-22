import React from "react";
// import wisata1 from "../../public/wisata/wisata1.png";
import { Link } from "react-router-dom";
import dataTempatWisata from "../data/dataTempatWisata";
const DetailWisataRatenggaro = () => {
  const wisata = dataTempatWisata[3];
  const galeryImg = dataTempatWisata[3].gallery;
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
            Kampung Adat Ratenggaro adalah sebuah kampung adat yang terletak di
            Desa Umbu Ngedo, Kecamatan Kodi Bangedo, Kabupaten Sumba Barat Daya,
            Provinsi Nusa Tenggara Timur. Berada di ujung selatan dan di pesisir
            pantai yang indah. Desa ini berjarak dari Tambolaka, ibukota
            Kabupaten Sumba Barat Daya sejauh 56 kilometer. Belum tersedia
            akomodasi umum yang dapat digunakan pengunjung untuk mencapai ke
            desa ini sehingga pengunjung harus menyewa kendaraan atau jasa
            travel dari Tambolaka yang berjarak sekitar 56 km ke lokasi Desa
            Ratenggaro. Akses jalanan dari Tambolaka menuju Ratenggaro dapat
            ditempuh dalam waktu 1,5 hingga 2 jam dengan kondisi jalan beraspal
            yang terpelihara baik
          </p>
          <p>
            Kepercayaan utama masyarakat Desa adat Rateranggo adalah Marapu,
            yakni kegiatan pemujaan terhadap para leluhur yang masih menjadi
            tradisi yang dipegang teguh. Tradisi ini mempengaruhi bentuk rumah
            yang mereka tempati. Rumah-rumah penduduk merupakan rumah panggung
            dengan menara atap yang menjulang tinggi. Tinggi menara atapnya
            bahkan ada yang mencapai 30 meter dan tertinggi di antara
            menara-menara rumah adat yang ada di Pulau Sumba. Menara atap yang
            menjulang tinggi, selain melambangkan status sosial, juga sebagai
            bentuk penghormatan terhadap arwah para leluhur sehingga rumah
            selain sebagai tempat tinggal juga berfungsi sebagai sarana
            pemujaan.
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

export default DetailWisataRatenggaro;
