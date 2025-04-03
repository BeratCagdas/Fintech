import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-semibold">
        <Link to="/">FinTech</Link>
      </div>
      <div className="space-x-4">
        <Link to="/login" className="text-white">Giriş Yap</Link>
        <Link to="/register" className="text-white">Kayıt Ol</Link>
        <Link to="/services" className="text-white hover:text-gray-300">Hizmetlerimiz</Link>
      </div>
    </nav>
  );
}

export default Navbar;