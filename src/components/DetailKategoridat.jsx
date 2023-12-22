import React from "react";
import { useParams } from "react-router-dom";
import dataAdat from "../data/dataAdat";
const DetailKategoriAdat = () => {
  const { slug } = useParams();
  const result = dataAdat.filter((data) => {
    return data.link === slug;
  });
  const galleryImg = result[0].gallery;
  const paragraf = result[0].deskripsi;
  return (
    <div className="container py-2">
      <div className="mt-4 wisata-info-top">
        <div className="h-100">
          <img
            src={result[0].image}
            className="w-100 h-100 rounded-3"
            alt="gambar"
          />
        </div>
      </div>
      <div className="mt-3 d-flex flex-column row-gap-2">
        <div>
          <h2>{result[0].nama}</h2>
        </div>
        <div>
          <h5>Asal</h5>
          <span target="_blank" className="text-decoration-none text-black2">
            {result[0].asal}
          </span>
        </div>
        <div>
          <h5>Deskripsi</h5>
          {paragraf.map((paragraf, idx) => (
            <p
              key={idx}
              style={{ textAlign: "justify" }}
              className="text-black2"
            >
              {paragraf}
            </p>
          ))}
        </div>
      </div>
      <section className="mt-3">
        <h2>Galeri</h2>
        <div className="mt-3 row galeri-container row-gap-3">
          {galleryImg.map((image, idx) => (
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

export default DetailKategoriAdat;
