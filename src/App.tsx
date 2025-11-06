import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { UseCases } from './components/sections/UseCases';
import { Testimonials } from './components/sections/Testimonials';
import { Comparison } from './components/sections/Comparison';
import { Security } from './components/sections/Security';
import { Pricing } from './components/sections/Pricing';
import { CTA } from './components/sections/CTA';
import { Modal } from './components/ui/Modal';
import { WaitlistForm } from './components/WaitlistForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Comparison />
      <Security />
      <Pricing onWaitlistClick={() => setIsModalOpen(true)} />
      <CTA />
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Join Pray.so Waiting List"
      >
        <WaitlistForm />
      </Modal>
    </div>
  );
}

export default App;
