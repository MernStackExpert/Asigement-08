import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../Componants/Navbar";
import { Outlet, useNavigation } from "react-router"; 
import Footer from "../Componants/Footer";

const MainLayouts = () => {
  const navigation = useNavigation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center h-[80vh]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
