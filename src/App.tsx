/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProduct from './components/FeaturedProduct';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fff8f5]">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProduct />
        <Testimonials />
        <LocationContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
