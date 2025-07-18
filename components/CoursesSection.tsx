import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

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

const CourseCard = ({ course }: { course: Course }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
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

  const categories = ['All', ...new Set(courses.map(course => course.category))];

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-16 bg-white" id="courses">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of courses designed to help you achieve your academic goals
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
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
          <div className="w-full md:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-12 w-12"
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
            </div>
            <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
