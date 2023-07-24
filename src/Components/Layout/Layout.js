import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <>
      <Header />
      <div key="mainlayout">
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
          className="text-xl"
        />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout
