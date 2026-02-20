'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import MobileNav from './components/MobileNav';
import ContactForm from './components/ContactForm';
import GalleryCarousel from './components/GalleryCarousel';
import AppFolioEmbed from './components/AppFolioEmbed';
import FadeIn from './components/animations/FadeIn';
import StaggerContainer from './components/animations/StaggerContainer';
import StaggerItem from './components/animations/StaggerItem';

const galleryImages = [
  '/images/marbella-images-1.webp',
  '/images/marbella-images-2.webp',
  '/images/marbella-images-3.webp',
  '/images/marbella-images-4.webp',
  '/images/marbella-images-5.webp',
  '/images/marbella-images-6.webp',
  '/images/marbella-images-7.webp',
  '/images/marbella-images-8.webp',
  '/images/marbella-images-9.webp',
  '/images/marbella-images-10.webp',
  '/images/marbella-images-11.webp',
  '/images/marbella-images-12.webp',
  '/images/marbella-images-13.webp',
  '/images/marbella-images-14.webp',
  '/images/marbella-images-15.webp',
  '/images/marbella-images-16.webp',
  '/images/marbella-images-17.webp',
  '/images/marbella-images-18.webp',
  '/images/marbella-images-19.webp',
  '/images/marbella-images-20.webp',
  '/images/marbella-images-21.webp',
  '/images/marbella-images-22.webp',
  '/images/marbella-images-23.webp',
  '/images/marbella-images-24.webp',
];

const communityAmenities = [
  {
    title: 'Modern Clubhouse',
    description:
      'Expansive clubhouse with vaulted ceilings, billiards, and lounge areas',
  },
  {
    title: 'Resort-Style Pool',
    description: 'Beautiful swimming pool perfect for relaxation and leisure',
  },
  {
    title: 'Dog Park',
    description: 'Dedicated space for your furry friends to run and play',
  },
  {
    title: 'Picnic Area with Grills',
    description: 'Outdoor grilling stations perfect for gatherings',
  },
  {
    title: 'Fitness Center',
    description: 'Stay active with our well-equipped fitness facility',
  },
  {
    title: 'On-Site Management',
    description: 'Professional property management team always on hand',
  },
  {
    title: 'On-Site Maintenance',
    description: 'Quick-response maintenance support when you need it',
  },
];

const unitAmenities = [
  {
    title: 'Stainless Steel Appliances',
    description: 'Modern kitchen with quality stainless steel appliances',
  },
  {
    title: 'In-Unit Washer/Dryer',
    description: 'Full-size laundry right in your apartment',
  },
  {
    title: 'Gas Heat & Central Air',
    description: 'Year-round climate control for maximum comfort',
  },
  {
    title: 'Elevator Access',
    description: 'Convenient elevator access throughout the building',
  },
  {
    title: 'Cable Ready',
    description: 'Pre-wired for cable and high-speed internet',
  },
  {
    title: 'Attached Garage',
    description: 'Private attached garage available on select units',
  },
];

function AnimatedCounter({
  target,
  suffix = '',
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Marbella Bay Apartments"
                width={300}
                height={75}
                className="h-10 md:h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              <Link
                href="#about"
                className="text-white hover:text-brand-blue-light transition-colors"
              >
                About
              </Link>
              <Link
                href="#amenities"
                className="text-white hover:text-brand-blue-light transition-colors"
              >
                Amenities
              </Link>
              <Link
                href="#gallery"
                className="text-white hover:text-brand-blue-light transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-brand-blue-light transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#availability"
                className="px-5 py-2 bg-brand-blue text-white font-semibold rounded hover:bg-brand-blue-dark transition-colors"
              >
                View Availability
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section - Parallax Effect */}
        <section
          ref={heroRef}
          id="home"
          className="relative min-h-[100svh] min-h-[560px] flex items-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: heroY }}
            aria-hidden="true"
          >
            <Image
              src="/images/marbella-images-1.webp"
              alt=""
              fill
              className="object-cover scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-brand-dark/40" />
          </motion.div>

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full"
          >
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 60 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-[3px] bg-brand-blue mb-6"
              />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-title mb-2"
              >
                Marbella Bay
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-brand-blue-light hero-subtitle-spread mb-8 font-light"
              >
                A P A R T M E N T S
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-white/90 mb-10 max-w-xl leading-relaxed"
              >
                A vibrant 176-unit community offering modern living with a
                resort-style feel in beautiful Beaumont, Texas. Where comfort
                meets contemporary style.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#availability"
                  className="px-8 py-3 bg-brand-blue text-white text-center font-semibold rounded hover:bg-brand-blue-dark transition-all hover:scale-105 active:scale-95"
                >
                  View Availability
                </Link>
                <Link
                  href="#amenities"
                  className="px-8 py-3 bg-white/10 backdrop-blur text-white text-center font-semibold rounded border border-white/30 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  Explore Amenities
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Stats Banner */}
        <section className="bg-brand-dark py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-brand-blue-light">
                    <AnimatedCounter target={176} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Modern Units
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-brand-blue-light">
                    <AnimatedCounter target={96} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    One Bedrooms
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-brand-blue-light">
                    <AnimatedCounter target={80} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Two Bedrooms
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-brand-blue-light">
                    <AnimatedCounter target={2010} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Year Built
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn delay={0.1}>
                <div className="accent-line-center mb-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                  Welcome to Marbella Bay
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                  Welcome to Marbella Bay Apartments, a vibrant 176-unit
                  community offering modern living with a resort-style feel.
                  Built in 2010, the property features a desirable mix of 96
                  one-bedroom and 80 two-bedroom residences, designed for
                  comfort, functionality, and everyday ease.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-lg text-brand-gray leading-relaxed">
                  Life at Marbella Bay extends beyond the apartment. Residents
                  enjoy an expansive clubhouse with vaulted ceilings, a
                  resort-style swimming pool, fitness center, Amazon Hub
                  Lockers, and a scenic dog park. Located at 6155 Sienna Trails
                  in Beaumont, TX, you&apos;ll be just steps away from shopping,
                  dining, and daily necessities.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About Section 2 - Image + Text */}
        <section className="py-16 md:py-24 bg-brand-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group shadow-xl">
                  <Image
                    src="/images/marbella-images-15.webp"
                    alt="Marbella Bay Apartments modern living space"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
              <div>
                <FadeIn direction="right" delay={0.2}>
                  <div className="accent-line mb-6" />
                </FadeIn>
                <FadeIn direction="right" delay={0.3}>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                    Comfort Meets Style
                  </h2>
                </FadeIn>
                <FadeIn direction="right" delay={0.4}>
                  <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                    Experience the perfect blend of contemporary living and
                    laid-back luxury. Each residence is crafted for ease and
                    style, featuring stainless steel appliances, in-unit
                    washer/dryer, and open floor plans flooded with natural
                    light.
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.5}>
                  <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                    Whether you&apos;re a young professional, growing family, or
                    anyone seeking quality living in Southeast Texas, Marbella
                    Bay offers the perfect combination of comfort, convenience,
                    and community.
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.6}>
                  <Link
                    href="#contact"
                    className="inline-block px-6 py-3 bg-brand-blue text-white font-semibold rounded hover:bg-brand-blue-dark transition-all hover:scale-105 active:scale-95"
                  >
                    Schedule a Tour
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Image + Text - Reversed */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <FadeIn direction="left" delay={0.2}>
                  <div className="accent-line mb-6" />
                </FadeIn>
                <FadeIn direction="left" delay={0.3}>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                    Resort-Style Living
                  </h2>
                </FadeIn>
                <FadeIn direction="left" delay={0.4}>
                  <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                    Our expansive clubhouse features vaulted ceilings, a cozy
                    fireplace lounge, billiards table, and a fully equipped
                    kitchen area — the perfect space for socializing or
                    unwinding after a long day.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.5}>
                  <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                    Step outside and enjoy our resort-style swimming pool,
                    outdoor grilling stations, and a scenic dog park — all
                    designed to complement the ease of everyday living at
                    Marbella Bay.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.6}>
                  <Link
                    href="#amenities"
                    className="inline-block px-6 py-3 border-2 border-brand-dark text-brand-dark font-semibold rounded hover:bg-brand-dark hover:text-white transition-all hover:scale-105 active:scale-95"
                  >
                    View All Amenities
                  </Link>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2} className="order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group shadow-xl">
                  <Image
                    src="/images/marbella-images-8.webp"
                    alt="Marbella Bay Apartments clubhouse lounge with stone fireplace"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Amenities Section - Image-Paired Panels (kept from tropical version) */}
        <section id="amenities" className="py-16 md:py-24 bg-brand-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <FadeIn delay={0.1}>
                <div className="accent-line-center mb-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                  Amenities
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                  Everything you need for comfortable, resort-style living — all
                  in one community.
                </p>
              </FadeIn>
            </div>

            {/* Community Amenities - Image on right */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div>
                <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-semibold text-brand-dark mb-6">
                    Community Amenities
                  </h3>
                </FadeIn>
                <StaggerContainer
                  staggerDelay={0.06}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {communityAmenities.map((amenity, index) => (
                    <StaggerItem key={index}>
                      <div className="bg-white rounded-lg p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-2 border-transparent hover:border-brand-blue">
                        <h4 className="text-base font-semibold text-brand-dark mb-1">
                          {amenity.title}
                        </h4>
                        <p className="text-sm text-brand-gray">
                          {amenity.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <FadeIn direction="right" delay={0.3}>
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl hidden lg:block">
                  <Image
                    src="/images/marbella-images-8.webp"
                    alt="Marbella Bay clubhouse with stone fireplace"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Unit Amenities - Image on left */}
            <div className="grid lg:grid-cols-2 gap-8">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl hidden lg:block">
                  <Image
                    src="/images/marbella-images-15.webp"
                    alt="Marbella Bay modern apartment living room"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <div>
                <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-semibold text-brand-dark mb-6">
                    Unit Amenities
                  </h3>
                </FadeIn>
                <StaggerContainer
                  staggerDelay={0.06}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {unitAmenities.map((amenity, index) => (
                    <StaggerItem key={index}>
                      <div className="bg-white rounded-lg p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-2 border-transparent hover:border-brand-blue">
                        <h4 className="text-base font-semibold text-brand-dark mb-1">
                          {amenity.title}
                        </h4>
                        <p className="text-sm text-brand-gray">
                          {amenity.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Big masonry gallery (kept) */}
        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn delay={0.1}>
                <div className="accent-line-center mb-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                  Photo Gallery
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                  Take a virtual tour of our beautiful community, resort-style
                  amenities, and thoughtfully designed apartments.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <GalleryCarousel images={galleryImages} />
            </FadeIn>
          </div>
        </section>

        {/* Availability Section with wave transition (kept) */}
        <section id="availability" className="relative bg-brand-gray-light">
          {/* Wave divider */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden h-16 -translate-y-full" aria-hidden="true">
            <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 C300,80 900,0 1200,80 L1200,80 L0,80 Z" fill="var(--brand-gray-light)" />
            </svg>
          </div>

          <div className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <FadeIn delay={0.1}>
                  <div className="accent-line-center mb-6" />
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                    Current Availability
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                    Find your perfect apartment from our selection of one and
                    two-bedroom floor plans.
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={0.4}>
                <AppFolioEmbed />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section - Split Color Layout */}
        <section id="contact" className="relative overflow-hidden">
          {/* Wave divider from availability */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden h-16 -translate-y-full z-10" aria-hidden="true">
            <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,80 C300,0 900,80 1200,0 L1200,80 L0,80 Z" fill="var(--brand-dark)" />
            </svg>
          </div>

          {/* Full dark background */}
          <div className="absolute inset-0 z-0 bg-brand-dark" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left - Contact info on navy */}
              <FadeIn direction="left" delay={0.2}>
                <div className="text-white">
                  <div className="accent-line mb-6" style={{ background: 'var(--brand-blue-light)' }} />
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Get in Touch
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-brand-blue-light text-sm uppercase tracking-wider mb-1">
                        Address
                      </h4>
                      <p className="text-white/80">
                        6155 Sienna Trails<br />
                        Beaumont, TX 77706
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-blue-light text-sm uppercase tracking-wider mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+14098665800"
                        className="text-white/80 hover:text-brand-blue-light transition-colors"
                      >
                        (409) 866-5800
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-blue-light text-sm uppercase tracking-wider mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:leasing@marbellabayapts.com"
                        className="text-white/80 hover:text-brand-blue-light transition-colors"
                      >
                        leasing@marbellabayapts.com
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-blue-light text-sm uppercase tracking-wider mb-1">
                        Office Hours
                      </h4>
                      <p className="text-white/80">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right - Form on light gray */}
              <FadeIn direction="right" delay={0.3}>
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-dark mb-6">
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="h-96 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-94.1574!3d30.0800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6155+Sienna+Trails%2C+Beaumont%2C+TX+77706!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Marbella Bay Apartments location map"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div>
              <Image
                src="/images/logo.svg"
                alt="Marbella Bay Apartments"
                width={180}
                height={45}
                className="h-20 w-auto mb-4 brightness-100"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                176 modern apartments in Beaumont, TX. Where resort-style living
                meets everyday comfort and convenience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2" aria-label="Footer navigation">
                <Link
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#amenities"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Amenities
                </Link>
                <Link
                  href="#gallery"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="#availability"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Availability
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <nav className="space-y-2" aria-label="Legal navigation">
                <Link
                  href="/accessibility"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Accessibility Statement
                </Link>
              </nav>
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  6155 Sienna Trails
                  <br />
                  Beaumont, TX 77706
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Marbella Bay Apartments. All
              rights reserved.
            </p>
            <p className="mt-2">
              Equal Housing Opportunity. We do not discriminate on the basis of
              race, color, religion, national origin, sex, familial status, or
              disability.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
