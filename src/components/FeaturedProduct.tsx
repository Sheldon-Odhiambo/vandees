import { useState } from 'react';

const occasions = ['Birthday', 'Wedding', 'Graduation Party', 'Chama', 'Picnic', 'Hangout'];
const samosaImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDmWt4jLAssv_o4_JTqOTLuGhMGqJIVLTVk7TkqhNpRVzlb_2r-6Sw-plFQPGR48i4dmWm3thqkJwtUCd0IzouCEvIcIq6XhKR0aU147diX9mhgu74ApL4-zXJ2nTpNINwXItMNTY6b1t7x6kyvhuZ8HV6NTc2m-hEz2KQKSc4WnQMvDqsG55BcCM-atYrjoRA6m-5KqELCrzek1cLYDz1sWm6F_L4kWhBCobwp6q0JWv-WGvh1NTaGBLcy9RsfA6eG7udAKyS1v2Gq',
  '/assets/samosa1.jpeg',
  '/assets/samosa2.jpeg',
  '/assets/samosa3.jpeg'
];

export default function FeaturedProduct() {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [quantity, setQuantity] = useState(800);
  const [selectedImage, setSelectedImage] = useState(samosaImages[0]);

  const getPrice = (qty: number) => {
    if (qty > 50) return qty * 40;
    if (qty > 10) return qty * 45;
    return qty * 50;
  };

  const totalPrice = getPrice(quantity);

  return (
    <section className="py-24 bg-[#f4ece9]">
      <div className="container mx-auto px-6">
        <div className="bg-[#fff8f5] overflow-hidden flex flex-col md:flex-row shadow-xl">
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="text-[#47664b] font-bold tracking-widest uppercase text-xs mb-4">Best Seller</span>
            <h3 className="font-headline text-4xl md:text-5xl font-black text-[#1e1b19] mb-6 italic">The Famous <br/>Vandee's Samosas</h3>
            <p className="text-[#54433c] leading-relaxed mb-8">
              A local legend in Ongata Rongai. Golden, crispy pastry shells filled with perfectly seasoned beef or lentils, crafted from a family recipe that has defined quality for years.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#823b18]">Select Occasion</label>
                <select 
                  value={occasion} 
                  onChange={(e) => setOccasion(e.target.value)}
                  className="p-3 border border-stone-300 bg-white"
                >
                  {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#823b18]">Quantity (Samosas)</label>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="p-3 border border-stone-300 bg-white"
                />
              </div>
              <div className="text-xl font-bold text-[#1e1b19]">
                Total: KES {totalPrice}
              </div>
            </div>

            <a 
              href={`https://wa.me/254743599431?text=I%20would%20like%20to%20order%20${quantity}%20samosas%20for%20a%20${occasion.replace(' ', '%20')}.%20Total%20price:%20KES%20${totalPrice}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#823b18] text-white px-10 py-4 font-bold text-sm uppercase tracking-widest w-fit hover:bg-[#a0522d] transition-colors"
            >
              Order for Pickup
            </a>
          </div>
          <div className="md:w-1/2 relative min-h-[400px] flex flex-col">
            <img 
              src={selectedImage} 
              alt="Samosas" 
              className="flex-grow w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="flex gap-2 p-2 bg-white/80">
              {samosaImages.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(img)} className="w-16 h-16 overflow-hidden border-2 border-transparent hover:border-[#823b18]">
                  <img src={img} alt={`Samosa ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
