import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Vandee's samosas are legendary! The catering for our wedding was absolutely perfect.",
    name: "sheldon.a"
  },
  {
    quote: "I learned so much in Vandee's baking class. Highly recommended for anyone in Rongai.",
    name: "jewel.w"
  },
  {
    quote: "The 3-course meal was a gourmet experience right in our neighborhood. Simply amazing.",
    name: "wamuyu.j"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fff8f5]">
      <div className="container mx-auto px-6">
        <h3 className="font-headline text-4xl font-bold text-center mb-16">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-[#faf2ef] rounded-xl"
            >
              <p className="text-[#54433c] italic mb-6">"{t.quote}"</p>
              <p className="font-bold text-[#823b18]">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
