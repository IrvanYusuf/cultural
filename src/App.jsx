import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import LayoutPage from "./layout/LayoutPage";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import DetailWisataRebo from "./components/DetailWisataRebo";
import DetailWisataJamGadang from "./components/DetailWisataJamGadang";
import DetailWisataMaimun from "./components/DetailWisataMaimun";
import DetailWisataBorobudur from "./components/DetailWisataBorobudur";
import DetailWisataPanglipuran from "./components/DetailWisataPanglipuran";
import DetailWisataRatenggaro from "./components/DetailWisataRatenggaro";
import DaftarTarian from "./components/DaftarTarian";
import DetailTarian from "./components/DetailTarian";
import DaftarAlatMusik from "./components/DaftarAlatMusik";
import DetailAlatMusik from "./components/DetailAlatMusik";
import DaftarRumah from "./components/DaftarRumah";
import DetailRumah from "./components/DetailRumah";
import DaftarAdat from "./components/DaftarAdat";
import DetailKategoriAdat from "./components/DetailKategoridat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LayoutPage />}>
          <Route path="/profile" element={<Profile />} />
          <Route index element={<Home />} />
          <Route path="/detail/desa-wae-rebo" element={<DetailWisataRebo />} />
          <Route
            path="/detail/jam-gadang"
            element={<DetailWisataJamGadang />}
          />
          <Route
            path="/detail/istana-maimun"
            element={<DetailWisataMaimun />}
          />
          <Route
            path="/detail/candi-borobudur"
            element={<DetailWisataBorobudur />}
          />
          <Route
            path="/detail/desa-panglipuran"
            element={<DetailWisataPanglipuran />}
          />
          <Route
            path="/detail/desa-adat-ratenggaro"
            element={<DetailWisataRatenggaro />}
          />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/kategori/tarian" element={<DaftarTarian />} />
          <Route path="/kategori/tarian/:slug" element={<DetailTarian />} />

          <Route path="/kategori/alat-musik" element={<DaftarAlatMusik />} />
          <Route
            path="/kategori/alat-musik/:slug"
            element={<DetailAlatMusik />}
          />

          <Route path="/kategori/rumah-tradisional" element={<DaftarRumah />} />
          <Route path="/kategori/rumah/:slug" element={<DetailRumah />} />

          <Route path="/kategori/adat" element={<DaftarAdat />} />
          <Route path="/kategori/adat/:slug" element={<DetailKategoriAdat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
