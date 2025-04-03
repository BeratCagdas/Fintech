import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Services() {
    const navigate = useNavigate();
    const handlebudget = () => {

        navigate("/budget");
    }



    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center h-auto flex flex-col items-center gap-12 p-8">
          <h1 className="text-4xl font-bold text-gray-700">Hizmetlerimiz</h1>
          
          {/* Hizmet Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            
            {/* Finansal Yönetim */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-center text-center h-full">
              <img
                src="your-image-url.jpg"
                alt="Finansal Yönetim"
                className="w-full max-w-md h-40 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800">Finansal Yönetim</h2>
              <p className="text-lg text-gray-600 mt-2 flex-grow">
                Finansal işlemlerinizi kolayca takip edebilir, bütçenizi yönetebilir ve harcamalarınızı analiz edebilirsiniz.
              </p>
              <button  onClick={handlebudget}  className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md mt-4 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
                Daha Fazla Bilgi
              </button>
            </div>
  
            {/* Yatırım Danışmanlığı */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-center text-center h-full">
              <img
                src="your-image-url.jpg"
                alt="Yatırım Danışmanlığı"
                className="w-full max-w-md h-40 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800">Yatırım Danışmanlığı</h2>
              <p className="text-lg text-gray-600 mt-2 flex-grow">
                Yatırım kararlarınızı bilimsel analizlerle destekleyerek daha bilinçli yatırımlar yapmanıza yardımcı oluruz.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md mt-4 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
                Daha Fazla Bilgi
              </button>
            </div>
  
            {/* Veri Analizi */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-center text-center h-full">
              <img
                src="https://www.akademikredaksiyon.com/wp-content/uploads/2021/11/veri-analizi-ve-veri-analiz-yontemleri-nelerdir.webp"
                alt="Veri Analizi"
                className="w-full max-w-md h-40 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800">Veri Analizi</h2>
              <p className="text-lg text-gray-600 mt-2 flex-grow">
                Veri analizi hizmetimizle büyük veri kümelerini analiz ederek, stratejik kararlar almanıza yardımcı oluyoruz.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md mt-4 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
                Daha Fazla Bilgi
              </button>
            </div>
  
          </div>
  
          <p className="text-2xl font-bold text-gray-700">Hangi hizmetimizle ilgileniyorsun?</p>
        </div>
      </section>
    );
  }
  
  export default Services;