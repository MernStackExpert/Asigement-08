import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../Componants/Navbar";
import { Outlet, useLocation } from "react-router"; 
import Footer from "../Componants/Footer";

const MainLayouts = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow relative">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/70 backdrop-blur-sm z-50">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        <Outlet />
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
