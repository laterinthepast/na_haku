import React from 'react'
import Navigation from './components/Navigation'
import Landing from './components/Landing'
import About from './components/About'
import SideBar from './components/SideBar';
import ProductsOne from './components/ProductsOne';
import Gallery from './components/Gallery';






function App() {
  return (
    <div>
      <SideBar />
      <Navigation />
      <Landing />
      <About />
      <ProductsOne />
      <Gallery />

    </div>

  );
}

export default App;
