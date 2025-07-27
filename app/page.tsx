"use client"

import { useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ModernButton, ModernSection, ModernSkeleton } from "@/components/ui/modern-ui"
import {
  BookOpen,
  Users,
  UserPlus,
  Award,
  Shield,
  LayoutDashboard,
  Book,
  ArrowRight,
  Lightbulb,
  Star,
  CheckCircle2 as UserCheck,
  Target,
  Phone,
  Mail,
  MapPin,
  Menu as MenuIcon,
  X as XIcon,
  FileText as FileTextIcon,
  Smartphone as SmartphoneIcon,
  MessageSquare as MessageSquareIcon,
  Heart as HeartIcon,
  GraduationCap as GraduationCapIcon,
  MessageCircleMore,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import dynamic from 'next/dynamic';
import { ImageCarousel } from '@/components/ImageCarousel';
import { CoursesSection } from '@/components/CoursesSection';
import { ToppersSection } from '@/components/ToppersSection';

// Dynamically import the OSMap component with SSR disabled
const OSMap = dynamic(() => import('@/components/OSMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 md:h-full bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-gray-400">Loading map...</div>
    </div>
  ),
});

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="h-full">
    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative h-full flex flex-col p-8">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full opacity-20"></div>
        
        {/* Profile image */}
        <div className="relative mb-6 group self-center">
          <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center shadow-md z-20">
            <Star className="w-5 h-5 text-white fill-current" />
          </div>
        </div>
        {/* Name and course */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
          <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            {testimonial.course}
          </span>
        </div>
        
        {/* Testimonial text */}
        <div className="mb-6 text-gray-600 flex-1">
          <div 
            className="prose-sm max-w-none text-center"
            dangerouslySetInnerHTML={{
              __html: testimonial.feedback.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">$1</strong>',
              ),
            }}
          />
        </div>
        
        {/* Rating */}
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 transition-colors ${
                i < 4 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300 fill-current'
              }`}
            />
          ))}
        </div>
        
        {/* Decorative bottom element */}
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
      </div>
    </div>
  </div>
);

export default function TheClassesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const items = container.querySelectorAll('.testimonial-item');
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
    const items = container.querySelectorAll<HTMLElement>('.testimonial-item');
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    items.forEach((item: HTMLElement, index: number) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(itemCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentSlide(closestIndex);
  };

  const nextSlide = () => {
    const next = currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(next);
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
    setCurrentSlide(prev);
    scrollToIndex(prev);
  };

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "MBBS - AIIMS Delhi",
      image: "/placeholder.svg?height=80&width=80",
      feedback:
        "THE Classes became my **family** during preparation. The **interactive** sessions and personalized care helped me build **confidence** to crack NEET.",
    },
    {
      name: "Arjun Patel",
      course: "IIT Bombay - Computer Science",
      image: "/placeholder.svg?height=80&width=80",
      feedback:
        "Small batches meant **individual attention**. Teachers knew my strengths and weaknesses. The **stress-free environment** made learning enjoyable.",
    },
    {
      name: "Sneha Gupta",
      course: "CBSE - 95% Board Result",
      image: "/placeholder.svg?height=80&width=80",
      feedback:
        "The **discussion-based learning** approach helped me understand concepts deeply. I never felt pressured, just supported throughout my journey.",
    },
  ]

  const whyChooseFeatures = [
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Small Batches",
      description: "Maximum 15 students per batch ensuring personalized attention and better interaction with faculty.",
    },
    {
      icon: <MessageSquareIcon className="w-8 h-8 text-orange-600" />,
      title: "Discussion-Based Learning",
      description:
        "Interactive sessions where students actively participate, ask questions, and learn through discussions.",
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-orange-600" />,
      title: "Stress-Free Environment",
      description: "Nurturing atmosphere that focuses on learning without pressure, building confidence naturally.",
    },
    {
      icon: <GraduationCapIcon className="w-8 h-8 text-orange-600" />,
      title: "Experienced Faculty",
      description: "Expert teachers with years of experience in NEET, JEE, and CBSE preparation.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-orange-600" />,
      title: "Personalized Care",
      description: "Individual attention to each student's needs, strengths, and areas for improvement.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Learning over Results",
      description: "Focus on deep understanding and concept clarity rather than just exam-oriented preparation.",
    },
  ]

  const studyMaterials = [
    {
      icon: <BookOpen className="w-12 h-12 text-orange-600" />,
      title: "Comprehensive Study Material",
      description: "Carefully curated content covering all topics with detailed explanations and examples.",
      color: "bg-orange-50",
    },
    {
      icon: <FileTextIcon className="w-12 h-12 text-purple-600" />,
      title: "Minor & Major Test Series",
      description: "Regular assessments to track progress and identify areas for improvement.",
      color: "bg-purple-50",
    },
    {
      icon: <SmartphoneIcon className="w-12 h-12 text-yellow-600" />,
      title: "Learning App",
      description: "Mobile app with practice questions, video lectures, and progress tracking.",
      color: "bg-yellow-50",
    },
  ]

  const methodology = [
    {
      step: "01",
      title: "TSPS: Teacher-Student Practice Sheets",
      description: "Interactive practice sessions conducted in class with immediate feedback and doubt resolution.",
    },
    {
      step: "02",
      title: "HSPS: Home Self Practice Sheets",
      description: "Structured homework assignments designed to reinforce classroom learning and build confidence.",
    },
    {
      step: "03",
      title: "ESPS: Exam-Specific Practice Sheets",
      description: "Targeted practice materials focusing on exam patterns and question types for better preparation.",
    },
    {
      step: "04",
      title: "Test Series",
      description: "Regular mock tests and assessments to evaluate progress and improve exam temperament.",
    },
  ]

  const faculty = [
    {
      name: "Vikram Sagar Sir",
      subject: "Chemistry",
      experience: "10 Years Experience",
      image: "/teacher_1-BDD-8-iz.png",
    },
    {
      name: "Rajeev Lal Sir",
      subject: "Physics",
      experience: "30 Years Experience",
      image: "/teacher_2-B4UyHFTs.png",
    },
    {
      name: "Gyanendra Singh Sir",
      subject: "Biology",
      experience: "20 Years Experience",
      image: "/teacher_3-DxMlnws7.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo and Text */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="THE Classes Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  priority
                />
                <span className="ml-3 text-xl sm:text-2xl font-bold text-orange-500">
                  ALL THE CLASSES
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#courses" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Courses
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Testimonials
              </Link>
              <Link href="#faculty" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Faculty
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Contact
              </Link>
              <ModernButton 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                size="lg"
              >
                Register Now
              </ModernButton>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2.5 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-20 right-4 left-4 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}
        >
          <nav className="flex flex-col p-6 space-y-2">
            <Link 
              href="#courses" 
              className="text-gray-800 hover:text-orange-600 text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-800 hover:text-orange-600 text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#faculty" 
              className="text-gray-800 hover:text-orange-600 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-800 hover:text-orange-600 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <ModernButton 
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </ModernButton>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                Best Coaching in the City
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Achieve Your <span className="text-orange-600">Academic Dreams</span>
              </h1>

              {/* Coaching Qualities */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-2 p-2 sm:p-3 bg-white/50 sm:bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900 leading-tight">Small Batches of 8</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Personalized attention</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 p-2 sm:p-3 bg-white/50 sm:bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900 leading-tight">Expert Faculty</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Experienced educators</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 p-2 sm:p-3 bg-white/50 sm:bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900 leading-tight">Study Material</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Comprehensive content</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 p-2 sm:p-3 bg-white/50 sm:bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <MessageSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900 leading-tight">Doubt Solving</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Regular sessions</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
                Join small batches, expert teachers, and a stress-free learning environment designed for NEET, JEE, and CBSE success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center">
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                  </span>
                </button>
                <button 
                  className="group relative inline-flex items-center justify-center overflow-hidden border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10">
                    View Courses
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-orange-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
              </div>
            </div>

            {/* Right Content - Query Form */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Book Your FREE Demo Class Now!</h3>
                <form className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your name"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your phone number"
                      required
                      aria-required="true"
                      inputMode="tel"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your full address"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                      Select Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="course"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                      required
                      aria-required="true"
                      defaultValue=""
                    >
                      <option value="" disabled>Choose a course</option>
                      <option value="neet">NEET Preparation</option>
                      <option value="jee">JEE Preparation</option>
                      <option value="cbse">CBSE Board</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Type your message here..."
                      aria-label="Optional message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Submit Query
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting this form, you agree to our <a href="#" className="text-orange-600 hover:underline">Terms & Conditions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Toppers */}
      <ToppersSection />

      {/* Success Stories */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block text-orange-500 px-6 py-1 rounded-full mb-4">
                <h2 className="text-4xl font-bold">Success Stories</h2>
              </div>
              <p className="text-xl text-black">Hear from our successful students</p>
            </div>

            {/* Desktop Grid - Hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`desktop-${index}`} testimonial={testimonial} />
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
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={`mobile-${index}`} 
                    className="testimonial-item flex-shrink-0 w-[min(320px,100vw-4rem)] snap-center"
                    data-index={index}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
              
              {/* Mobile Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      scrollToIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowRight className="w-5 h-5 rotate-180 text-orange-500" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5 text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <CoursesSection />
        </div>
      </section>

      {/* Why Choose Us - Interactive Tabs */}
      <section className="py-16 px-4 bg-white relative overflow-hidden" data-animate>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block text-orange-500 font-medium mb-3 text-sm tracking-[0.2em] uppercase">WHY CHOOSE US</span>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Students Love 
                <span className="relative inline-block">
                  <span className="relative z-10 text-orange-500">ALL THE CLASSES</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-50 -z-0"></span>
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mt-6 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image showcase */}
            <div className="w-full lg:w-1/2 relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              </div>
              
              {/* Feature highlights */}
              {whyChooseFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out transform ${
                    index === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                  id={`feature-${index}`}
                >
                  <div className="p-6 md:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-2xl mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-200 rounded-full opacity-20 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Tab navigation */}
            <div className="w-full lg:w-1/2 space-y-4">
              {whyChooseFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`group relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:border-orange-200 hover:shadow-lg ${
                    index === 0 ? 'border-orange-300 bg-orange-50' : 'border-transparent bg-gray-50'
                  }`}
                  onMouseEnter={() => {
                    // Hide all features
                    document.querySelectorAll('[id^="feature-"]').forEach(el => {
                      el.classList.remove('opacity-100');
                      el.classList.add('opacity-0');
                    });
                    // Show current feature
                    const currentFeature = document.getElementById(`feature-${index}`);
                    if (currentFeature) {
                      currentFeature.classList.remove('opacity-0');
                      currentFeature.classList.add('opacity-100');
                    }
                    // Update active tab
                    document.querySelectorAll('.tab-item').forEach((el, i) => {
                      if (i === index) {
                        el.classList.remove('border-transparent', 'bg-gray-50');
                        el.classList.add('border-orange-300', 'bg-orange-50');
                      } else {
                        el.classList.remove('border-orange-300', 'bg-orange-50');
                        el.classList.add('border-transparent', 'bg-gray-50');
                      }
                    });
                  }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center text-orange-600 font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                        {feature.title}
                        <ArrowRight className="w-4 h-4 ml-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '1000+', label: 'Students Trained' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Expert Faculty' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Materials */}
      <section className="py-20 px-4 bg-white" data-animate>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Customized Study Materials</h2>
            <p className="text-xl text-gray-600">Everything you need for comprehensive preparation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studyMaterials.map((material, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${material.color} p-8 text-center`}>
                    <div className="mb-6 group-hover:scale-110 transition-transform">{material.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{material.title}</h3>
                    <p className="text-gray-600">{material.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-cream-50" data-animate>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/vikram_sir-BUpp7ciH.png"
                  alt="Vikram Sagar Sir"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Director's Welcome Message</h2>
                <h3 className="text-xl text-orange-600 font-medium mb-6">- Vikram Sagar Sir</h3>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to THE Classes, where we believe in nurturing not just academic excellence but also character
                  development. Our vision goes beyond traditional coaching - we create an environment where students can
                  thrive without stress.
                </p>
                <p>
                  With our focus on <strong className="text-orange-600">small batches</strong> and{" "}
                  <strong className="text-orange-600">personalized attention</strong>, we ensure every student receives
                  the care they deserve. Our hybrid learning approach combines the best of traditional teaching with
                  modern methodologies.
                </p>
                <p>
                  At THE Classes, we don't just prepare students for exams; we prepare them for life. Join our family
                  and experience the difference that genuine care and expert guidance can make in your academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have questions? We're here to help. Visit us or reach out through any of these channels.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Phone</h3>
                  <p className="text-gray-600">+91 9625-852085</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                  <p className="text-gray-600">support@alltheclasses.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex-shrink-0 flex items-center justify-center mt-1">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Address</h3>
                  <p className="text-gray-600">P-40A, Shashi Park Rd, near Ahlcon Public School, Supreme Enclave, Mayur Vihar, New Delhi, Delhi, 110091</p>
                </div>
              </div>
            </div>
            
            {/* Map Container - Expanded to full height */}
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative z-10">
              <div className="relative h-full w-full">
                <OSMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Modern Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 mt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg shadow-lg">
                <div className="bg-white p-2 rounded-lg">
                  <Image 
                    src="/logo.png" 
                    alt="THE Classes Logo" 
                    width={44} 
                    height={44}
                    className="h-11 w-11 object-contain"
                  />
                </div>
                <span className="text-2xl font-extrabold text-white drop-shadow-md">
                  ALL THE CLASSES
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students with quality education and personalized learning experiences.
              </p>
              <div className="flex space-x-4 pt-2">
                {[
                  { icon: 'fab fa-facebook-f', url: '#' },
                  { icon: 'fab fa-twitter', url: '#' },
                  { icon: 'fab fa-instagram', url: '#' },
                  { icon: 'fab fa-linkedin-in', url: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', url: '#' },
                  { name: 'Courses', url: '#courses' },
                  { name: 'About Us', url: '#' },
                  { name: 'Contact', url: '#contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">P-40A, Shashi Park Rd, near Ahlcon Public School, Supreme Enclave, Mayur Vihar, New Delhi, Delhi, 110091</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 text-orange-400 mr-3" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">+91 9625-852085</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-orange-400 mr-3" />
                  <a href="mailto:info@theclasses.com" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">support@alltheclasses.com</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for updates and course information.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-6 rounded-md transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} THE CLASSES. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Terms of Service</a>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* Sticky Quiz Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-white font-medium flex items-center">
          <Lightbulb className="w-5 h-5 mr-2" />
          Quiz
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919625852085" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.498 6.563C15.333 4.427 12.513 3.25 9.647 3.25c-5.1 0-9.25 4.15-9.25 9.25 0 1.63.44 3.25 1.28 4.67l-1.35 4.2 4.37-1.32c1.38.75 2.9 1.15 4.45 1.15 5.1 0 9.25-4.15 9.25-9.25 0-2.86-1.32-5.55-3.5-7.44z" fill="#fff"/>
          <path d="M20.218 3.78c-2.35-2.35-5.47-3.64-8.79-3.64-6.63 0-12 5.37-12 12 0 2.12.56 4.19 1.62 6l-1.69 5.25 5.45-1.65c1.75 1.01 3.74 1.54 5.8 1.54 6.63 0 12-5.37 12-12 0-3.31-1.35-6.42-3.73-8.75zm-10.57 15.22h-.4c-1.25 0-2.48-.31-3.57-.9l-.26-.15-2.75.8.73-2.64-.17-.28c-.82-1.25-1.25-2.67-1.25-4.14 0-4.64 3.8-8.44 8.44-8.44 2.25 0 4.37.88 5.96 2.47 1.59 1.59 2.47 3.7 2.47 5.96 0 4.65-3.8 8.44-8.45 8.44z" fill="#fff"/>
          <path d="M17.848 14.38c-.22-.11-1.3-.64-1.5-.72-.2-.08-.35-.12-.5.12-.15.24-.57.72-.7.86-.13.14-.26.16-.49.05-.23-.1-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.27-1.59-.13-.23-.01-.36.1-.47.1-.1.23-.26.35-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.39-.13-.01-.28-.01-.43-.01-.15 0-.38.06-.59.3-.2.25-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.56 2.38 3.77 3.34.53.23.94.37 1.26.47.53.17 1.01.15 1.39.09.43-.07 1.3-.53 1.48-1.05.18-.52.18-.96.13-1.05-.05-.09-.18-.14-.39-.23z" fill="#fff"/>
        </svg>
      </a>
    </div>
  );
}
