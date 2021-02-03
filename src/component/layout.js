import React from 'react';
import Header from './header.js';
import Footer from './footer.js';

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="mx-auto p-6 max-w-screen-md w-full flex-grow">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;