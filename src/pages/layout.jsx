import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* This renders the nested route content */}
    </>
  );
}

export default Layout;
