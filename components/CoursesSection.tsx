import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
}

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className = '' }: CourseCardProps) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${className}`}>
    <div className="relative h-40 bg-gray-100">
      <Image 
        src={course.image} 
        alt={course.title}
        fill
        className="object-cover"
      />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
        {course.category}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 h-12">{course.title}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2 h-10">{course.description}</p>
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <div className="flex items-center text-yellow-500 mr-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-gray-900 ml-1">{course.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({course.reviews})</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{course.price}</span>
      </div>
      
      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
        Enroll Now
      </button>
    </div>
  </div>
);

export const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const courses: Course[] = [
    {
      id: 1,
      title: 'NEET Preparation',
      description: 'Comprehensive coaching for NEET aspirants with expert faculty and study materials.',
      image: '/courses/neet.jpg',
      category: 'Medical',
      price: '₹15,000',
      rating: 4.8,
      reviews: 1245,
    },
    {
      id: 2,
      title: 'JEE Main & Advanced',
      description: 'Targeted preparation for JEE Main and Advanced with comprehensive study materials.',
      image: '/courses/jee.jpg',
      category: 'Engineering',
      price: '₹18,000',
      rating: 4.7,
      reviews: 1876
    },
    {
      id: 3,
      title: 'CBSE Class 12th',
      description: 'Complete syllabus coverage for CBSE Class 12th with regular tests and doubt sessions.',
      image: '/courses/cbse.jpg',
      category: 'School',
      price: '₹12,000',
      rating: 4.9,
      reviews: 2341
    },


  ];

  const categories = ['All', 'Medical', 'Engineering', 'School'];

  const filteredCourses = !selectedCategory 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  // Category cards data
  const categoryCards = [
    {
      id: 'neet',
      title: 'NEET',
      description: 'Medical Entrance',
      icon: '🧑‍⚕️',
      courses: courses.filter(course => course.category === 'Medical')
    },
    {
      id: 'jee',
      title: 'JEE',
      description: 'Engineering Entrance',
      icon: '🏗️',
      courses: courses.filter(course => course.category === 'Engineering')
    },
    {
      id: 'school',
      title: 'School',
      description: 'CBSE & State Boards',
      icon: '📚',
      courses: courses.filter(course => course.category === 'School')
    },

  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your desired category to explore our courses
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categoryCards.map((category) => (
            <div 
              key={category.id}
              onClick={() => setSelectedCategory(category.title === 'Government Jobs' ? 'Civil Services' : category.title === 'NEET' ? 'Medical' : category.title === 'JEE' ? 'Engineering' : category.title)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                (selectedCategory === category.title || 
                 (category.title === 'NEET' && selectedCategory === 'Medical') ||
                 (category.title === 'JEE' && selectedCategory === 'Engineering') ||
                 (category.title === 'Government Jobs' && ['Civil Services', 'Banking', 'Government Jobs'].includes(selectedCategory || '')))
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
              }`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
              <div className="flex items-center text-orange-500 font-medium text-sm">
                {category.courses.length} Courses
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory || 'All'} Courses
              <span className="text-orange-500 ml-2">({filteredCourses.length})</span>
            </h3>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center"
            >
              View All Categories
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-100">
                  <div className="h-40 bg-gray-100 relative overflow-hidden">
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium text-gray-900 ml-1">{course.rating}</span>
                        </div>
                        <span className="text-xs text-gray-400 ml-2">({course.reviews})</span>
                      </div>
                      <span className="text-sm font-bold text-orange-500">{course.price}</span>
                    </div>
                    <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500">No courses found in this category.</p>
            </div>
          )}
        </div>

        <div className="text-center">
          <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
