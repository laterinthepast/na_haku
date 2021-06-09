import React from 'react'
import Navigation from './components/Navigation'
import Landing from './components/Landing'
import About from './components/About'
import SideBar from './components/SideBar';
import ProductsOne from './components/ProductsOne';
import Gallery from './components/Gallery';
import SimpleReactLightbox from 'simple-react-lightbox'






function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <SideBar />
        <Navigation />
        <Landing />
        <About />
        <ProductsOne />
        <Gallery />
      </SimpleReactLightbox>
    </div>

  );
}

export default App;
