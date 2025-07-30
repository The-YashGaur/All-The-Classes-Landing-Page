"use client";

import { useState, useRef } from "react";
import { GraduationCap, Award, Star, ChevronRight, Trophy, ChevronLeft } from "lucide-react";

function TopperCard({ topper }: { topper: Topper }) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-orange-100 to-orange-200 flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400" />
        </div>
        
        <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
          <Award className="w-5 h-5" />
        </div>
        
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full shadow-lg border-2 border-white">
          <div className="flex items-center justify-center space-x-1">
            <Trophy className="w-3 h-3 text-yellow-300" />
            <span className="font-bold text-sm">{topper.rank}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-lg font-bold mb-1">{topper.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{topper.exam}</p>
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Topper {
  id: number;
  name: string;
  rank: string;
  exam: string;
  score: string;
  year: string;
  image: string;
}

const toppers: Topper[] = [
  { 
    id: 1, 
    name: "Aarav Sharma", 
    rank: "AIR 12", 
    exam: "NEET 2024", 
    score: "720/720", 
    year: "2024",
    image: "/placeholder.svg"
  },
  { 
    id: 2, 
    name: "Priya Patel", 
    rank: "AIR 28", 
    exam: "JEE Advanced 2024", 
    score: "315/360", 
    year: "2024",
    image: "/placeholder.svg"
  },
  { 
    id: 3, 
    name: "Rahul Verma", 
    rank: "AIR 45", 
    exam: "NEET 2024", 
    score: "715/720", 
    year: "2024",
    image: "/placeholder.svg"
  },
];

export function ToppersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    const next = currentIndex === toppers.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(next);
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = currentIndex === 0 ? toppers.length - 1 : currentIndex - 1;
    setCurrentIndex(prev);
    scrollToIndex(prev);
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const items = container.querySelectorAll('.carousel-item');
    if (items[index]) {
      items[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const items = container.querySelectorAll('.carousel-item');
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(itemCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  return (
    <section id="toppers" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-bold mb-3 tracking-widest text-sm uppercase">
            OUR ACHIEVERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-orange-500">Top Performers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence and hard work of our students who have made us proud with their outstanding achievements
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">
          {toppers.map((topper) => (
            <div key={`desktop-${topper.id}`} className="group">
              <TopperCard topper={topper} />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative w-full overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
              padding: '1rem 0',
              gap: '1rem',
              paddingLeft: 'calc((100% - min(320px, 100% - 4rem)) / 2)',
              paddingRight: 'calc((100% - min(320px, 100% - 4rem)) / 2)'
            }}
            onScroll={handleScroll}
          >
            {toppers.map((topper, index) => (
              <div 
                key={`mobile-${topper.id}`} 
                className="carousel-item flex-shrink-0 w-[min(320px,100vw-4rem)] snap-center flex justify-center"
                data-index={index}
              >
                <TopperCard topper={topper} />
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {toppers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-orange-500" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-orange-500" />
          </button>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join our success stories and be the next achiever!
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start Your Journey
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
