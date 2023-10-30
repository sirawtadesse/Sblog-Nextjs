// _app.js

import React from 'react';
import App from 'next/app';
import 'tailwindcss/tailwind.css';



// Custom global styles
//import '../styles/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;


    // You can provide additional props to all pages
    // by modifying the pageProps object here

    return <Component {...pageProps} />;
  }
}

export default MyApp;