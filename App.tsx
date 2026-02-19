
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Journey from './components/Journey';
import CTA from './components/CTA';
import Footer from './components/Footer';
import QRModal from './components/QRModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onStartExperiment={openModal} />
      
      <main>
        <Hero onStartExperiment={openModal} />
        <Mission />
        <Journey onStartExperiment={openModal} />
        <CTA onStartExperiment={openModal} />
      </main>

      <Footer />
      
      {isModalOpen && <QRModal onClose={closeModal} />}
    </div>
  );
};

export default App;
