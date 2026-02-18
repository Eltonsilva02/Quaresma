import React, { useRef, useEffect } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages = [
  "https://i.ibb.co/Nd7RWCg9/whatsapp-chat-2.png",
  "https://i.ibb.co/DgssgMNn/whatsapp-chat-3.png",
  "https://i.ibb.co/5gJ2SBBR/whatsapp-chat.png",
  "https://i.ibb.co/NgcdxtqT/whatsapp-chat-1.png"
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
        const cardWidth = scrollContainer.children[0]?.getBoundingClientRect().width || 0;
        const gap = 24; // 1.5rem gap (gap-6)
        
        // Check if we can scroll more to the right
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        // Tolerance of 10px to account for browser calculation differences
        if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
             scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
             scrollContainer.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || 0;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    
    scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-4 bg-[#080808]">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="flex justify-center mb-4">
            <Users className="w-10 h-10 text-red-600" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-12">
          Testemunhos de <span className="text-red-500">Graças Alcançadas</span>
        </h3>

        {/* Carousel Container */}
        <div className="relative group px-2 md:px-12"> 
           {/* Navigation Buttons - Visible on all screens */}
           <button 
             onClick={() => scroll('left')}
             className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/60 hover:bg-red-600 rounded-full text-white transition-all backdrop-blur-md border border-white/10 flex items-center justify-center opacity-80 hover:opacity-100"
             aria-label="Anterior"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           
           <button 
             onClick={() => scroll('right')}
             className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/60 hover:bg-red-600 rounded-full text-white transition-all backdrop-blur-md border border-white/10 flex items-center justify-center opacity-80 hover:opacity-100"
             aria-label="Próximo"
           >
             <ChevronRight className="w-6 h-6" />
           </button>

           <div 
             ref={scrollRef}
             className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar items-start"
             style={{ scrollBehavior: 'smooth' }}
           >
             {testimonialImages.map((img, idx) => (
               <div 
                 key={idx} 
                 className="snap-center shrink-0 w-[85vw] md:w-[300px] rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] duration-300 bg-[#111]"
               >
                 <img 
                   src={img} 
                   alt={`Depoimento ${idx + 1}`} 
                   className="w-full h-auto block"
                   loading="lazy"
                 />
               </div>
             ))}
           </div>
        </div>
        
        <p className="text-gray-500 text-xs mt-[-10px] animate-pulse">
          Deslize para ver mais
        </p>
      </div>
    </section>
  );
};

export default Testimonials;