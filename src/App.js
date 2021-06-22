import React from 'react'

import Landing from './components/Landing'
import About from './components/About'
import SideBar from './components/SideBar';
import ProductsOne from './components/ProductsOne';
import Gallery from './components/Gallery';
import SimpleReactLightbox from 'simple-react-lightbox'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';






function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <SideBar />
        <Navigation />
        <MobileMenu/>
        <Landing />
        <About />
        <ProductsOne />
        <Gallery />
        <Footer />
      </SimpleReactLightbox>
    </div>

  );
}

export default App;
