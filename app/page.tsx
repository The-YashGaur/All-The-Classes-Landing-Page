"use client"

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

// Dynamically import the OSMap component with SSR disabled
const OSMap = dynamic(() => import('@/components/OSMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 md:h-full bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-gray-400">Loading map...</div>
    </div>
  ),
});

export default function TheClassesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
      {/* Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Image
                  src="/images/Logo.png"
                  alt="THE Classes Logo"
                  width={120}
                  height={40}
                  className="h-10 sm:h-12 w-auto"
                  priority
                />
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
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg fixed top-20 left-4 right-4 z-40 rounded-xl shadow-2xl overflow-hidden">
          <nav className="flex flex-col p-6 space-y-4">
            <Link 
              href="#courses" 
              className="text-gray-800 hover:text-orange-600 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-800 hover:text-orange-600 text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
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
      )}

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

            {/* Right Content - Query Form with Floating Labels */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl opacity-50 blur-3xl -z-10"></div>
              <div className="bg-white rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 border border-gray-100 overflow-hidden">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 text-center">Request a Callback</h3>
                <form className="space-y-5">
                  <div className="relative z-0 group">
                    <input
                      type="text"
                      id="name"
                      className="block py-2.5 px-0 w-full text-base sm:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                      placeholder=" "
                      required
                      style={{ fontSize: '16px' }}
                    />
                    <label 
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Full Name
                    </label>
                  </div>
                  
                  <div className="relative z-0 group">
                    <input
                      type="tel"
                      id="phone"
                      className="block py-2.5 px-0 w-full text-base sm:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                      placeholder=" "
                      required
                      style={{ fontSize: '16px' }}
                      inputMode="tel"
                    />
                    <label 
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contact Number
                    </label>
                  </div>
                  
                  <div className="relative z-0 group">
                    <input
                      type="email"
                      id="email"
                      className="block py-2.5 px-0 w-full text-base sm:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                      placeholder=" "
                      required
                      style={{ fontSize: '16px' }}
                      inputMode="email"
                    />
                    <label 
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email Address
                    </label>
                  </div>
                  
                  <div className="relative z-0 group">
                    <select
                      id="course"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled></option>
                      <option value="neet">NEET Preparation</option>
                      <option value="jee">JEE Preparation</option>
                      <option value="cbse">CBSE Board</option>
                    </select>
                    <label 
                      htmlFor="course"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Select Course
                    </label>
                  </div>
                  
                  <div className="relative z-0 group pt-2">
                    <textarea
                      id="message"
                      rows={3}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label 
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your Message
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm sm:text-base"
                  >
                    Submit Query
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block  text-orange-500 px-6 py-1 rounded-full mb-4">
                <h2 className="text-4xl font-bold">Success Stories</h2>
              </div>
              <p className="text-xl text-black">Hear from our successful students</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative group">
                  <Card className="h-full p-6 group-hover:scale-[1.02] transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex flex-col items-center text-center space-y-6">
                          <div className="relative">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={120}
                              height={120}
                              className="rounded-full border-4 border-orange-300 shadow-lg"
                            />
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center">
                              <Star className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                            <p className="text-orange-600 font-medium">{testimonial.course}</p>
                          </div>
                          <div className="prose prose-sm prose-invert max-w-none text-center">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: testimonial.feedback.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="text-orange-600">$1</strong>',
                                ),
                              }}
                            />
                          </div>
                          <div className="flex justify-center mt-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-6 h-6 fill-current transition-colors ${
                                  i < 4 ? 'text-yellow-400' : 'text-yellow-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </div>
              ))}
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
          <div className="text-center mb-12">
            <span className="inline-block text-orange-500 font-medium mb-3 tracking-widest text-xs uppercase">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="relative inline-block">
                <span className="relative z-10">Why Students Love </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-orange-100 -z-0 opacity-70"></span>
              </span>
              <span className="text-orange-500 relative z-10">THE Classes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 mx-auto mb-6 rounded-full"></div>
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

      {/* Teaching Methodology - Responsive */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50 relative overflow-hidden" data-animate>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-orange-400 blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-20 w-40 h-40 rounded-full bg-purple-400 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block text-orange-500 font-medium mb-3 text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Teaching <span className="bg-orange-400 bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              A proven 4-step approach designed to maximize learning outcomes and student success
            </p>
          </div>

          <div className="relative min-h-[auto] md:min-h-[700px] flex items-center justify-center">
            {/* Mobile Steps - Vertical List */}
            <div className="w-full md:hidden space-y-6">
              {methodology.map((step, index) => (
                <div 
                  key={index}
                  className="w-full p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Layout - Circle */}
            <div className="hidden md:block w-full h-full">
              {/* Animated Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-purple-400/20 animate-pulse-slow"></div>
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-orange-400 flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl relative z-10 transform transition-transform duration-700 hover:scale-105">
                    <div className="absolute -inset-4 rounded-full border-2 border-orange-300/30 animate-spin-slow [animation-duration:20s]"></div>
                    <h3 className="text-xl md:text-2xl font-bold">Our</h3>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Methodology</h3>
                    <div className="w-12 h-1 bg-white/50 rounded-full my-2"></div>
                    <p className="text-xs md:text-sm opacity-90 font-medium">4 Steps to Success</p>
                  </div>
                </div>
              </div>

              {/* Steps - Circle Layout */}
              <div className="relative w-full h-full">
                {methodology.map((step, index) => {
                  const angle = (index * 90) - 45;
                  const radius = 350;
                  const x = Math.sin(angle * (Math.PI / 180)) * radius;
                  const y = -Math.cos(angle * (Math.PI / 180)) * radius;
                  
                  return (
                    <div 
                      key={index}
                      className="absolute w-64 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl z-10 border border-gray-100 group"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        zIndex: 10,
                        transitionDelay: `${index * 100}ms`,
                      }}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="relative">
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {step.step}
                          <div className="absolute -inset-1 rounded-full border-2 border-orange-300/30 animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <div className="pt-8">
                        <h3 className="text-lg font-bold text-center text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Connecting Lines - Only for desktop */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {methodology.map((_, index) => {
                    if (index === methodology.length - 1) return null;
                    const angle1 = (index * 90) - 45;
                    const angle2 = ((index + 1) * 90) - 45;
                    const radius = 30;
                    
                    const x1 = 50 + Math.sin(angle1 * (Math.PI / 180)) * radius;
                    const y1 = 50 - Math.cos(angle1 * (Math.PI / 180)) * radius;
                    const x2 = 50 + Math.sin(angle2 * (Math.PI / 180)) * radius;
                    const y2 = 50 - Math.cos(angle2 * (Math.PI / 180)) * radius;
                    
                    return (
                      <path
                        key={index}
                        d={`M ${x1} ${y1} A 40 40 0 0 1 ${x2} ${y2}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1.5"
                        strokeDasharray="3,4"
                        strokeLinecap="round"
                        opacity="0.6"
                        className="transition-all duration-500"
                        style={{
                          strokeDashoffset: '0',
                          strokeDasharray: '3,4',
                          animation: `dash 20s linear infinite ${index * 0.5}s`,
                        }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  <style jsx global>{`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                    @keyframes spin-slow {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes pulse-slow {
                      0%, 100% { opacity: 0.2; }
                      50% { opacity: 0.4; }
                    }
                    .animate-spin-slow {
                      animation: spin-slow 30s linear infinite;
                    }
                    .animate-pulse-slow {
                      animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                    .animate-ping-slow {
                      animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                    }
                  `}</style>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Expert Faculty */}
      <section id="faculty" className="py-16 md:py-24 px-4 bg-white relative overflow-hidden" data-animate>
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-orange-500 font-medium mb-3 tracking-widest text-xs uppercase">OUR TEAM</span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Expert Faculty</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Learn from the most experienced educators in the industry</p>
          </div>

          <div className="relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 -z-10"></div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-100 via-orange-200 to-orange-100 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {faculty.map((teacher, index) => (
                <div 
                  key={index} 
                  className={`relative group ${index === 1 ? 'md:mt-12' : 'md:mt-0'}`}
                >
                  {/* Teacher image with decorative border */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    {/* Outer circle */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-purple-500 p-1 animate-spin-slow" style={{ animationDuration: '10s' }}>
                      <div className="absolute inset-0.5 rounded-full bg-white"></div>
                    </div>
                    
                    {/* Image */}
                    <div className="absolute inset-1 rounded-full overflow-hidden">
                      <Image
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                        width={176}
                        height={176}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -inset-4 rounded-full border-2 border-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-6 rounded-full border border-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Teacher info */}
                  <div className="text-center px-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-orange-500 font-medium mb-2">{teacher.subject}</p>
                    <p className="text-gray-600 text-sm">{teacher.experience}</p>
                    
                    {/* Decorative dot */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '1000+', label: 'Students Trained' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Expert Faculty' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Info */}
            <div className="space-y-5">
              <div className="flex items-center">
                <Image 
                  src="/images/Logo.png" 
                  alt="THE Classes Logo" 
                  width={200} 
                  height={80}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering students to achieve their academic dreams through personalized coaching and innovative learning approaches.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700 inline-block">Quick Links</h3>
              <nav className="space-y-3">
                <Link href="#" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Ask Query</span>
                </Link>
                <Link href="#courses" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Courses</span>
                </Link>
                <Link href="#testimonials" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Testimonials</span>
                </Link>
                <Link href="#faculty" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Faculty</span>
                </Link>
                <Link href="#contact" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact Us</span>
                </Link>
              </nav>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700 inline-block">Our Courses</h3>
              <nav className="space-y-3">
                <Link href="#" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>NEET Preparation</span>
                </Link>
                <Link href="#" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>JEE Main & Advanced</span>
                </Link>
                <Link href="#" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>CBSE Board</span>
                </Link>
                <Link href="#" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Foundation Courses</span>
                </Link>
                <Link href="#" className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group">
                  <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>View All Courses</span>
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700 inline-block">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">+91 9625-852085</p>
                    <p className="text-sm text-gray-500">Mon-Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">support@alltheclasses.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">P-40A, Shashi Park Rd, near Ahlcon Public School, Supreme Enclave, Mayur Vihar, New Delhi, Delhi, 110091</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="md:flex md:items-center md:justify-between">
              <p className="text-center text-sm text-gray-400 md:text-left">
                &copy; {new Date().getFullYear()} THE Classes. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center space-x-6 md:mt-0">
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/refund-policy" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Quiz Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <ModernButton className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <Lightbulb className="w-5 h-5 mr-2" />
          Quiz
        </ModernButton>
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
  )
}
