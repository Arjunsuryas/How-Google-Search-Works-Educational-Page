import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchProcess from './components/SearchProcess';
import CoreComponents from './components/CoreComponents';
import Technologies from './components/Technologies';
import BuildYourOwn from './components/BuildYourOwn';
import Challenges from './components/Challenges';
import Diagram from './components/Diagram';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchProcess />
          <CoreComponents />
          <Technologies />
          <Diagram />
          <BuildYourOwn />
          <Challenges />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
