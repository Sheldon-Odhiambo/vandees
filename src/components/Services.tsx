import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Catering Services',
    description: 'Weddings, Birthdays, Graduations, Chamas, Picnics. Signature Samosas available.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0shR0BQib6cCcW7EOw5vxImvDMYhb8tou2BTHMCtNXRFgBvrcN_uEITEKNLI9gsE9bzamKDNFrq1xD4o1Mu0FxFLsdlrYMV5PBJoeTy0QbFDPVMY2D5dUiYF_iITAgkk4cHhMQx3PTF8kll9SYaPk42OX0VHnGtXv1KpPrRfLuWAYXvb6mzXQAvRFjpiQnSRHXNBPhNxySX_8SsPgPPJvtRGkL7SOEMjExBx4fnoazCxBPHFIyGFFFuWg5RYQAFNwSrgr1glM9pNY',
    cta: 'Book Catering'
  },
  {
    title: 'Baking Classes with Daisy',
    description: 'Beginner, Intermediate, Advanced. Four-hour sessions. KES 1500 per session.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMSSQKdVSC_mE8Fh0dm2fOz_o6pYLWhjvtjCK9ZB7jVLLyLBjRRj2vHzVC5Rv39AMXt8dM2WPQD7BhhdL9LaggsKAhmJb1NdzdiHflm-uX2j9t2RwcADsaihdrb4FVXtah6Fwhh7IXfq53yjQ12SWyUwdwGEuDZk92cDYIXAtIP-ZhqHSjrVYocKkC5327X35gSEU6nyAeHmzlS_XcoWSs9QwiVFpj51c8hfsppc86GhuCbHYWSDiMp291mIN289RNat2-WZ08qVQv',
    cta: 'Book a Class'
  },
  {
    title: '1-Course Meal',
    description: 'Perfect for a quick, delicious bite. KES 1100 👌',
    image: 'https://picsum.photos/seed/one-course-meal/800/1000',
    cta: 'Order Now'
  },
  {
    title: '2-Course Meal',
    description: 'A delightful experience for your palate. KES 1500 👌',
    image: 'https://picsum.photos/seed/two-course-meal/800/1000',
    cta: 'Order Now'
  },
  {
    title: '3-Course Meal',
    description: 'The ultimate gourmet local experience. KES 2000 👌',
    image: 'https://picsum.photos/seed/three-course-meal/800/1000',
    cta: 'Order Now'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="classes" className="py-24 bg-[#fff8f5]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h3 className="font-headline text-4xl font-bold text-[#1e1b19] mb-4">Culinary Excellence</h3>
            <p className="text-[#54433c] leading-relaxed">We provide more than just food; we deliver experiences crafted with precision, passion, and the finest local ingredients from across Kenya.</p>
          </motion.div>
          <div className="text-[#823b18] font-bold tracking-widest uppercase text-xs">Scroll to discover</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-stone-200">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-headline text-2xl font-bold mb-2">{service.title}</h4>
              <p className="text-[#54433c] text-sm mb-4">{service.description}</p>
              <div className="text-[#823b18] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                {service.cta} <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#fff8f5] p-8 max-w-md w-full relative"
          >
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-stone-500 hover:text-[#823b18]">
              <X size={24} />
            </button>
            <h3 className="font-headline text-2xl font-bold mb-4">Confirm Your Selection</h3>
            <p className="text-stone-600 mb-6">You are about to book/order: <strong>{selectedService.title}</strong></p>
            <a 
              href={`https://wa.me/254743599431?text=I%20would%20like%20to%20${selectedService.cta.replace(' ', '%20')}%20for%20${selectedService.title.replace(' ', '%20')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full bg-[#823b18] text-white text-center py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-[#a0522d] transition-colors"
            >
              Proceed to WhatsApp
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
}
