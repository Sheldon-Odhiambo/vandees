import { MapPin, Clock, Mail } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contact" className="py-24 bg-[#fff8f5]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#823b18] mb-6">
            <MapPin size={20} />
            <span className="font-bold tracking-widest uppercase text-xs">Ongata Rongai, Kenya</span>
          </div>
          <h3 className="font-headline text-4xl md:text-5xl font-bold mb-8">Book with us</h3>
          <p className="text-[#54433c] mb-12 text-lg">Experience the aroma of freshly baked goods and pick up your daily favorites directly from our flagship kitchen.</p>
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-[#eee7e4] mb-12">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJpHmTYR8yeUeLeZoAV0aQJbEnHhLbjk34J9VsUbTXjp5D_hwibtjMgWLJKJHqOORbK65Zx8S1HAbXxZ5wmozhVulH3C5-NmfqtyexinGn30vMuD-PHuMU69plfd_u8E3f452gFR5eWTzjHnPFlc6pg82c58RIkLWI11ht76mSlsuCR1iov01fEDjr_oPxWm3UZsy4Y0lLFE0wZLZhnfXDLQ7jO9cu3KTUarbAJzs9V8VklQvFz0kT5qYB4oCDlyWtVvvAOZ-peooq" alt="Map" className="w-full h-full object-cover opacity-80 grayscale" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-[#faf2ef] rounded-xl">
              <Clock className="text-[#823b18] mb-4" />
              <h5 className="font-headline text-xl font-bold mb-2">Opening Hours</h5>
              <p className="text-sm text-[#54433c]">Mon – Fri: 07:00 – 19:00<br/>Sat – Sun: 08:00 – 16:00</p>
            </div>
            <div className="p-8 bg-[#faf2ef] rounded-xl">
              <Mail className="text-[#823b18] mb-4" />
              <h5 className="font-headline text-xl font-bold mb-2">Get in Touch</h5>
              <p className="text-sm text-[#54433c]">daisyivan34@gmail.com<br/><a href="https://wa.me/254743599431" target="_blank" rel="noopener noreferrer" className="hover:text-[#823b18]">0743599431</a> / <a href="https://wa.me/254789002900" target="_blank" rel="noopener noreferrer" className="hover:text-[#823b18]">0789002900</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
