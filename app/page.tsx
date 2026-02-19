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
  {
    title: 'Off-Street Parking',
    description: 'Convenient and secure parking for all residents',
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
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-navy)]/95 backdrop-blur-sm"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Marbella{' '}
                <span className="text-[var(--brand-sand)]">Bay</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              <Link
                href="#about"
                className="text-white hover:text-[var(--brand-sand)] transition-colors"
              >
                About
              </Link>
              <Link
                href="#amenities"
                className="text-white hover:text-[var(--brand-sand)] transition-colors"
              >
                Amenities
              </Link>
              <Link
                href="#gallery"
                className="text-white hover:text-[var(--brand-sand)] transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-[var(--brand-sand)] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#availability"
                className="px-5 py-2 bg-[var(--brand-sand)] text-[var(--brand-navy)] font-semibold rounded hover:bg-[var(--brand-sand-dark)] transition-colors"
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
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)]/80 to-[var(--brand-navy)]/40" />
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
                className="h-[3px] bg-[var(--brand-sand)] mb-6"
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
                className="text-xl sm:text-2xl text-[var(--brand-sand)] hero-subtitle-spread mb-8 font-light"
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
                  className="px-8 py-3 bg-[var(--brand-sand)] text-[var(--brand-navy)] text-center font-semibold rounded hover:bg-[var(--brand-sand-dark)] transition-all hover:scale-105 active:scale-95"
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
        <section className="bg-[var(--brand-navy)] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[var(--brand-sand)]">
                    <AnimatedCounter target={176} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Modern Units
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[var(--brand-sand)]">
                    <AnimatedCounter target={96} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    One Bedrooms
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[var(--brand-sand)]">
                    <AnimatedCounter target={80} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Two Bedrooms
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[var(--brand-sand)]">
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
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-6">
                  Welcome to Marbella Bay
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-[var(--brand-gray)] mb-6 leading-relaxed">
                  Welcome to Marbella Bay Apartments, a vibrant 176-unit
                  community offering modern living with a resort-style feel.
                  Built in 2010, the property features a desirable mix of 96
                  one-bedroom and 80 two-bedroom residences, designed for
                  comfort, functionality, and everyday ease.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-lg text-[var(--brand-gray)] leading-relaxed">
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
        <section className="py-16 md:py-24 bg-[var(--brand-gray-light)]">
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
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-6">
                    Comfort Meets Style
                  </h2>
                </FadeIn>
                <FadeIn direction="right" delay={0.4}>
                  <p className="text-lg text-[var(--brand-gray)] mb-6 leading-relaxed">
                    Experience the perfect blend of contemporary living and
                    laid-back luxury. Each residence is crafted for ease and
                    style, featuring stainless steel appliances, in-unit
                    washer/dryer, and open floor plans flooded with natural
                    light.
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.5}>
                  <p className="text-lg text-[var(--brand-gray)] mb-8 leading-relaxed">
                    Whether you&apos;re a young professional, growing family, or
                    anyone seeking quality living in Southeast Texas, Marbella
                    Bay offers the perfect combination of comfort, convenience,
                    and community.
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.6}>
                  <Link
                    href="#contact"
                    className="inline-block px-6 py-3 bg-[var(--brand-sand)] text-[var(--brand-navy)] font-semibold rounded hover:bg-[var(--brand-sand-dark)] transition-all hover:scale-105 active:scale-95"
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
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-6">
                    Resort-Style Living
                  </h2>
                </FadeIn>
                <FadeIn direction="left" delay={0.4}>
                  <p className="text-lg text-[var(--brand-gray)] mb-6 leading-relaxed">
                    Our expansive clubhouse features vaulted ceilings, a cozy
                    fireplace lounge, billiards table, and a fully equipped
                    kitchen area — the perfect space for socializing or
                    unwinding after a long day.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.5}>
                  <p className="text-lg text-[var(--brand-gray)] mb-8 leading-relaxed">
                    Step outside and enjoy our resort-style swimming pool,
                    outdoor grilling stations, and a scenic dog park — all
                    designed to complement the ease of everyday living at
                    Marbella Bay.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.6}>
                  <Link
                    href="#amenities"
                    className="inline-block px-6 py-3 border-2 border-[var(--brand-navy)] text-[var(--brand-navy)] font-semibold rounded hover:bg-[var(--brand-navy)] hover:text-white transition-all hover:scale-105 active:scale-95"
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

        {/* Amenities Section */}
        <section id="amenities" className="py-16 md:py-24 bg-[var(--brand-gray-light)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <FadeIn delay={0.1}>
                <div className="accent-line-center mb-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-4">
                  Amenities
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-[var(--brand-gray)] max-w-2xl mx-auto">
                  Everything you need for comfortable, resort-style living — all
                  in one community.
                </p>
              </FadeIn>
            </div>

            {/* Community Amenities */}
            <FadeIn delay={0.3}>
              <h3 className="text-2xl font-semibold text-[var(--brand-navy)] mb-6 text-center">
                Community Amenities
              </h3>
            </FadeIn>
            <StaggerContainer
              staggerDelay={0.08}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14"
            >
              {communityAmenities.map((amenity, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-2 border-transparent hover:border-[var(--brand-sand)]">
                    <h4 className="text-lg font-semibold text-[var(--brand-navy)] mb-2">
                      {amenity.title}
                    </h4>
                    <p className="text-sm text-[var(--brand-gray)]">
                      {amenity.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Unit Amenities */}
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-semibold text-[var(--brand-navy)] mb-6 text-center">
                Unit Amenities
              </h3>
            </FadeIn>
            <StaggerContainer
              staggerDelay={0.08}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {unitAmenities.map((amenity, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-2 border-transparent hover:border-[var(--brand-sand)]">
                    <h4 className="text-lg font-semibold text-[var(--brand-navy)] mb-2">
                      {amenity.title}
                    </h4>
                    <p className="text-sm text-[var(--brand-gray)]">
                      {amenity.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn delay={0.1}>
                <div className="accent-line-center mb-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-4">
                  Photo Gallery
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-[var(--brand-gray)] max-w-2xl mx-auto">
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

        {/* Availability Section */}
        <section
          id="availability"
          className="py-16 md:py-24 bg-[var(--brand-gray-light)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn delay={0.1}>
                <div className="accent-line-center mb-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-4">
                  Current Availability
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-[var(--brand-gray)] max-w-2xl mx-auto">
                  Find your perfect apartment from our selection of one and
                  two-bedroom floor plans.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <AppFolioEmbed />
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Banner */}
            <FadeIn delay={0.2}>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12">
                <Image
                  src="/images/marbella-images-5.webp"
                  alt="Marbella Bay Apartments outdoor area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--brand-navy)]/60 flex items-center justify-center">
                  <div className="text-center">
                    <div className="accent-line-center mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Get in Touch
                    </h2>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <FadeIn direction="left" delay={0.3}>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[var(--brand-sand)] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[var(--brand-navy)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--brand-navy)]">
                          Address
                        </h4>
                        <p className="text-[var(--brand-gray)]">
                          6155 Sienna Trails
                          <br />
                          Beaumont, TX 77706
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[var(--brand-sand)] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[var(--brand-navy)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--brand-navy)]">
                          Phone
                        </h4>
                        <a
                          href="tel:+14098665800"
                          className="text-[var(--brand-sand-dark)] hover:text-[var(--brand-sand)] transition-colors"
                        >
                          (409) 866-5800
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[var(--brand-sand)] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[var(--brand-navy)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--brand-navy)]">
                          Email
                        </h4>
                        <a
                          href="mailto:leasing@marbellabayapts.com"
                          className="text-[var(--brand-sand-dark)] hover:text-[var(--brand-sand)] transition-colors"
                        >
                          leasing@marbellabayapts.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[var(--brand-sand)] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[var(--brand-navy)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--brand-navy)]">
                          Office Hours
                        </h4>
                        <p className="text-[var(--brand-gray)]">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 5:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Contact Form */}
              <FadeIn direction="right" delay={0.4}>
                <div className="bg-[var(--brand-gray-light)] rounded-lg p-6 md:p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-6">
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
      <footer className="bg-[var(--brand-navy)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div>
              <p className="text-xl font-bold mb-4">
                Marbella{' '}
                <span className="text-[var(--brand-sand)]">Bay</span>
              </p>
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
