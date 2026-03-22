import { Facebook, Instagram } from 'lucide-react';

// Simple TikTok icon SVG
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89h.27V9.67a6.22 6.22 0 0 0-3.16.85 6.22 6.22 0 0 0-2.6 3.16 6.22 6.22 0 0 0-.25 2.6 6.22 6.22 0 0 0 3.16 2.6 6.22 6.22 0 0 0 2.6.25 6.22 6.22 0 0 0 3.16-3.16 6.22 6.22 0 0 0 .25-2.6V6.69h3.45a4.83 4.83 0 0 0 4.25 3.77v-3.45z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-16 bg-[#e8e1de] border-t border-[#87736b]/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <img src="/assets/logo .jpeg" alt="Vandee's Logo" className="h-16 w-16 object-contain mb-4" />
            <h1 className="font-headline font-black text-2xl italic text-[#823b18] mb-2">Vandee's</h1>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#54433c]">Enjoy Quality Since 2018</p>
            <div className="flex gap-6 mt-4">
              <a href="https://web.facebook.com/people/Van-Deez/pfbid02LYTry85TmZ2sqGPMjoQNLoXDYmS9foCthgkMmHs7fPc3R2TGtT1cNn36Rm6SYrtUl/?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="text-[#823b18] hover:opacity-80">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/lights_on254?igsh=bHdxOGgxb2doaHZu" target="_blank" rel="noopener noreferrer" className="text-[#823b18] hover:opacity-80">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@lights_on8?_r=1&_t=ZS-94pBtBiknCs" target="_blank" rel="noopener noreferrer" className="text-[#823b18] hover:opacity-80">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#87736b]/10 text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#54433c]">© 2024 Vandee's Culinary Studio. Crafted in Ongata Rongai.</p>
        </div>
      </div>
    </footer>
  );
}
