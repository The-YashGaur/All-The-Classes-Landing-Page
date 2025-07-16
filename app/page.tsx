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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import dynamic from 'next/dynamic';
import { ImageCarousel } from '@/components/ImageCarousel';

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
      {/* Navbar */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center">
                <GraduationCapIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">THE Classes</span>
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
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Best Coaching in the City
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Achieve Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Academic Dreams
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
                Join small batches, expert teachers, and a stress-free learning environment designed for NEET, JEE, and CBSE success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <ModernButton 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </ModernButton>
                <ModernButton 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 rounded-full transition-all duration-300"
                >
                  View Courses
                </ModernButton>
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

            {/* Right Content - Image Carousel */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-300 to-orange-400 rounded-3xl opacity-20 blur-3xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageCarousel />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <BookOpen className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced educators with proven track records</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <Users className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Small Batches</h3>
              <p className="text-gray-600">Personalized attention with limited students per batch</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <Award className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistent top performers in board and competitive exams</p>
            </div>
          </div>
        </div>
      </section>



      {/* Success Stories */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-purple-50" data-animate>
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
                        <h3 className="text-lg font-bold text-center text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                <p className="text-xl text-gray-600">Have questions? We're here to help.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@theclasses.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Education Street, Learning City, State 123456</p>
                  </div>
                </div>
                
                {/* Map Container */}
                <div className="mt-6 h-64 rounded-xl overflow-hidden border border-gray-200">
                  <OSMap />
                </div>
              </div>
            </div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="border-gray-200" />
                    <Input placeholder="Your Email" type="email" className="border-gray-200" />
                  </div>
                  <Input placeholder="Subject" className="border-gray-200" />
                  <Textarea placeholder="Your Message" rows={4} className="border-gray-200" />
                  <ModernButton className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Send Message
                  </ModernButton>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <GraduationCapIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">THE Classes</span>
              </div>
              <p className="text-gray-400">
                Empowering students to achieve their academic dreams through personalized coaching and care.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Ask Query
                </Link>
                <Link href="#courses" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Courses
                </Link>
                <Link href="#testimonials" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Testimonials
                </Link>
                <Link href="#faculty" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Faculty
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Courses</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  NEET Preparation
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  JEE Main & Advanced
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  CBSE Board
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Foundation Courses
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>+91 98765 43210</p>
                <p>info@theclasses.com</p>
                <p>
                  123 Education Street
                  <br />
                  Learning City, State 123456
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} THE Classes. All rights reserved.</p>
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
    </div>
  )
}
