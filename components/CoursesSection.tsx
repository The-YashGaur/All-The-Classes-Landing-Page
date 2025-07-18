import { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
}

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className = '' }: CourseCardProps) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${className}`}>
    <div className="h-48 bg-gray-200 relative">
      <Image 
        src={course.image} 
        alt={course.title}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
        {course.category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
        <div className="flex items-center bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">
          <Star className="w-4 h-4 mr-1 fill-current" />
          {course.rating}
        </div>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
        <span>⏱️ {course.duration}</span>
        <span>👥 {course.students}+ Students</span>
      </div>
      <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
        Enroll Now
      </button>
    </div>
  </div>
);

export const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Handle touch start for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move for mobile swipe
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end to determine swipe direction
  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentSlide(prev => 
        prev === filteredCourses.length - 1 ? 0 : prev + 1
      );
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentSlide(prev => 
        prev === 0 ? filteredCourses.length - 1 : prev - 1
      );
    }
  }, [touchStart, touchEnd]);

  // Reset slide when category or search changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory, searchQuery]);

  const courses: Course[] = [
    {
      id: 1,
      title: 'NEET Preparation',
      description: 'Comprehensive coaching for NEET aspirants with expert faculty and study materials.',
      image: '/courses/neet.jpg',
      category: 'Medical',
      duration: '12 Months',
      students: 150,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'JEE Main & Advanced',
      description: 'Targeted preparation for JEE Main and Advanced with specialized test series.',
      image: '/courses/jee.jpg',
      category: 'Engineering',
      duration: '12 Months',
      students: 200,
      rating: 4.7,
    },
    {
      id: 3,
      title: 'CBSE 11th & 12th (PCMB)',
      description: 'Complete coaching for CBSE board exams with regular tests and doubt sessions.',
      image: '/courses/cbse.jpg',
      category: 'School',
      duration: '10 Months',
      students: 180,
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Foundation (8th-10th)',
      description: 'Strong foundation building for school students with concept clarity.',
      image: '/courses/foundation.jpg',
      category: 'School',
      duration: '12 Months',
      students: 250,
      rating: 4.9,
    },
    {
      id: 5,
      title: 'AIIMS Preparation',
      description: 'Specialized coaching for AIIMS entrance examination with expert guidance.',
      image: '/courses/aiims.jpg',
      category: 'Medical',
      duration: '12 Months',
      students: 100,
      rating: 4.8,
    },
    {
      id: 6,
      title: 'Olympiad Preparation',
      description: 'Training for various Olympiads (NTSE, KVPY, etc.) with expert faculty.',
      image: '/courses/olympiad.jpg',
      category: 'Competitive',
      duration: '10 Months',
      students: 120,
      rating: 4.7,
    },
  ];

  const categories = useMemo(() => {
    const allCategories = courses.map(course => course.category);
    return ['All', ...new Set(allCategories)];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, courses]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching programs designed for academic excellence and competitive exam success
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mt-4">No courses found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <>
            {/* Desktop Grid - Hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={`desktop-${course.id}`} course={course} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {filteredCourses.map((course) => (
                  <div key={`mobile-${course.id}`} className="w-full flex-shrink-0 px-2">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
              
              {/* Mobile Navigation Dots */}
              {filteredCourses.length > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {filteredCourses.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to course ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              
              {/* Navigation Arrows - Only show if more than one course */}
              {filteredCourses.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentSlide(prev => prev === 0 ? filteredCourses.length - 1 : prev - 1)}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg z-10 border border-gray-200 hover:border-orange-300 transition-colors"
                    aria-label="Previous course"
                  >
                    <ChevronLeft className="w-6 h-6 text-orange-500" />
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(prev => prev === filteredCourses.length - 1 ? 0 : prev + 1)}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg z-10 border border-gray-200 hover:border-orange-300 transition-colors"
                    aria-label="Next course"
                  >
                    <ChevronRight className="w-6 h-6 text-orange-500" />
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
