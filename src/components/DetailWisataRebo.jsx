import React from "react";
// import wisata1 from "../../public/wisata/wisata1.png";
import { Link } from "react-router-dom";
import dataTempatWisata from "../data/dataTempatWisata";
const DetailWisataRebo = () => {
  const wisata = dataTempatWisata[4];
  const galeryImg = dataTempatWisata[4].gallery;
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
            Wae Rebo atau Waerebo adalah sebuah desa adat terpencil dan
            misterius di Kabupaten Manggarai, Nusa Tenggara Timur. Wae Rebo
            merupakan salah satu destinasi wisata budaya di Kabupaten Manggarai.
            Terletak di ketinggian 1.200 meter di atas permukaan laut. Di
            kampung ini hanya terdapat 7 rumah utama atau yang disebut sebagai
            Mbaru Niang. Wae Rebo dinyatakan UNESCO sebagai Warisan Budaya Dunia
            pada Agustus 2012 dengan menyisihkan 42 negara lainnya.
          </p>
          <p>
            Wae sendiri dalam bahasa manggarai artinya ialah "air". Penulisan
            waerebo menggunakan 1 kata dan tidak memakai spasi seperti yang
            ditulis media. Desa Waerebo sendiri sudah berumur 1200 tahun dan
            sudah memasuki generasi ke 20. Dimana 1 generasi berusia 60 tahun
            lamanya.
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

export default DetailWisataRebo;
