import React, { use } from "react";
import { useNavigate } from "react-router-dom";



function Home() {
  const navigate = useNavigate();
  const handleservices = () => {
    navigate("services");
  }


  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <div className="w-full mx-auto text-center bg-blue-100 p-6 rounded-lg shadow-lg w-full min-h-[400px]">
        <h1 className="text-4xl font-bold mb-4">FinTech Platformuna Hoşgeldiniz</h1>
        <p className="text-lg mb-8">
          Finansal işlemlerinizi kolayca yönetebileceğiniz güvenli ve verimli bir platform.
          Hızlıca giriş yapabilir veya hesap oluşturabilirsiniz.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Giriş Yap</button>
          <button className="bg-green-600 text-white py-2 px-4 rounded">Kayıt Ol</button>
        </div>
        <p className="text-lg mb-8">
          Hizmetlerimizi öğrenmek ister misin?
          Tıkla!
        </p> 
        <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={handleservices}>Hizmetler</button>
      </div>
    </section>
  );
}

export default Home;