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
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Resort-Style Pool',
    description: 'Beautiful swimming pool perfect for relaxation and leisure',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Dog Park',
    description: 'Dedicated space for your furry friends to run and play',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Picnic Area with Grills',
    description: 'Outdoor grilling stations perfect for gatherings',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    title: 'Fitness Center',
    description: 'Stay active with our well-equipped fitness facility',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'On-Site Management',
    description: 'Professional property management team always on hand',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Off-Street Parking',
    description: 'Convenient and secure parking for all residents',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

const unitAmenities = [
  {
    title: 'Stainless Steel Appliances',
    description: 'Modern kitchen with quality stainless steel appliances',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'In-Unit Washer/Dryer',
    description: 'Full-size laundry right in your apartment',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Gas Heat & Central Air',
    description: 'Year-round climate control for maximum comfort',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  {
    title: 'Elevator Access',
    description: 'Convenient elevator access throughout the building',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7l4-4 4 4m0 10l-4 4-4-4" />
      </svg>
    ),
  },
  {
    title: 'Cable Ready',
    description: 'Pre-wired for cable and high-speed internet',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: 'Attached Garage',
    description: 'Private attached garage available on select units',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
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
        className="fixed top-0 left-0 right-0 z-50 bg-brand-sienna-dark/90 backdrop-blur-md"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-5 h-8 border-2 border-brand-saffron arch-top" aria-hidden="true" />
              <span className="text-xl md:text-2xl font-bold text-white italic font-[family-name:var(--font-playfair)]">
                Marbella Bay
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              <Link
                href="#about"
                className="text-white/80 hover:text-brand-saffron transition-colors text-sm tracking-wide"
              >
                About
              </Link>
              <Link
                href="#amenities"
                className="text-white/80 hover:text-brand-saffron transition-colors text-sm tracking-wide"
              >
                Amenities
              </Link>
              <Link
                href="#gallery"
                className="text-white/80 hover:text-brand-saffron transition-colors text-sm tracking-wide"
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-white/80 hover:text-brand-saffron transition-colors text-sm tracking-wide"
              >
                Contact
              </Link>
              <Link
                href="#availability"
                className="px-6 py-2 bg-brand-terracotta text-white font-semibold rounded-full hover:bg-brand-terracotta-dark transition-colors text-sm"
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
        {/* Hero Section - Centered Arch Panel */}
        <section
          ref={heroRef}
          id="home"
          className="relative min-h-[100svh] min-h-[560px] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: heroY }}
            aria-hidden="true"
          >
            <Image
              src="/images/marbella-images-4.webp"
              alt=""
              fill
              className="object-cover scale-110"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-32"
          >
            {/* Arch-shaped panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-brand-sienna-dark/70 backdrop-blur-sm px-8 sm:px-16 md:px-24 pt-16 pb-12 max-w-2xl w-full"
              style={{ borderRadius: '50% 50% 0 0 / 20% 20% 0 0' }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white hero-title font-[family-name:var(--font-playfair)] italic"
              >
                Marbella Bay
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center justify-center gap-4 mt-4 mb-6"
              >
                <span className="h-px w-12 bg-brand-saffron" />
                <span className="text-brand-saffron text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-dm-sans)]">
                  Beaumont, Texas
                </span>
                <span className="h-px w-12 bg-brand-saffron" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-white/80 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-8"
              >
                A vibrant 176-unit community where resort-style living meets
                everyday comfort.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="#availability"
                  className="px-8 py-3 bg-brand-terracotta text-white text-center font-semibold rounded-full hover:bg-brand-terracotta-dark transition-all hover:scale-105 active:scale-95"
                >
                  View Availability
                </Link>
                <Link
                  href="#about"
                  className="px-8 py-3 bg-white/10 backdrop-blur text-white text-center font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  Explore Community
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8"
            >
              <motion.svg
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-6 h-6 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Ribbon - Terracotta with diagonal top */}
        <section className="relative bg-brand-terracotta diagonal-top -mt-4 pt-14 pb-10 md:pt-16 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    <AnimatedCounter target={176} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Modern Units
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    <AnimatedCounter target={96} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    One Bedrooms
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    <AnimatedCounter target={80} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Two Bedrooms
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    <AnimatedCounter target={2010} />
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Year Built
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </p>
                  <p className="text-white/70 mt-1 text-sm uppercase tracking-wider">
                    Resort-Style Pool
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About Section - Bento Grid */}
        <section id="about" className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Large quote card spanning 2 cols */}
              <FadeIn delay={0.1} className="md:col-span-2">
                <div className="relative bg-white rounded-2xl p-8 md:p-12 h-full shadow-sm overflow-hidden">
                  {/* Decorative arch ornament */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-brand-saffron/15 arch-top" aria-hidden="true" />
                  <div className="pt-6">
                    <p className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-brand-terracotta leading-snug italic mb-8">
                      &ldquo;Where the sun meets the pool, and every day feels
                      like a getaway.&rdquo;
                    </p>
                    <p className="text-brand-gray text-lg leading-relaxed mb-4">
                      Welcome to Marbella Bay Apartments, a vibrant 176-unit
                      community offering modern living with a resort-style feel.
                      Built in 2010, the property features a desirable mix of 96
                      one-bedroom and 80 two-bedroom residences, designed for
                      comfort, functionality, and everyday ease.
                    </p>
                    <p className="text-brand-gray text-lg leading-relaxed">
                      Life at Marbella Bay extends beyond the apartment.
                      Residents enjoy an expansive clubhouse with vaulted
                      ceilings, a resort-style swimming pool, fitness center,
                      Amazon Hub Lockers, and a scenic dog park.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Right column - tall pool image + stat cards */}
              <div className="flex flex-col gap-6">
                <FadeIn delay={0.2}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src="/images/marbella-images-3.webp"
                      alt="Marbella Bay Apartments pool area"
                      fill
                      className="object-cover"
                    />
                  </div>
                </FadeIn>
                <div className="grid grid-cols-2 gap-4">
                  <FadeIn delay={0.3}>
                    <div className="relative bg-brand-turquoise rounded-2xl p-5 text-white text-center overflow-hidden">
                      <div className="absolute inset-0 tile-pattern-bg" aria-hidden="true" />
                      <p className="relative text-3xl font-bold font-[family-name:var(--font-playfair)]">176</p>
                      <p className="relative text-white/80 text-xs uppercase tracking-wider mt-1">Units</p>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.35}>
                    <div className="bg-brand-saffron rounded-2xl p-5 text-white text-center">
                      <p className="text-3xl font-bold font-[family-name:var(--font-playfair)]">2010</p>
                      <p className="text-white/80 text-xs uppercase tracking-wider mt-1">Year Built</p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section 2 - Comfort + Style */}
        <section className="py-16 md:py-24 bg-brand-limewash">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-xl">
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
                  <span className="text-brand-terracotta text-sm font-semibold uppercase tracking-widest">Interiors</span>
                </FadeIn>
                <FadeIn direction="right" delay={0.3}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-sienna-dark mt-2 mb-6 font-[family-name:var(--font-playfair)]">
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
                    className="inline-block px-8 py-3 bg-brand-terracotta text-white font-semibold rounded-full hover:bg-brand-terracotta-dark transition-all hover:scale-105 active:scale-95"
                  >
                    Schedule a Tour
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Pool Showcase Section - NEW */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/marbella-images-5.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
            role="img"
            aria-label="Resort-style swimming pool at Marbella Bay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-sienna-dark/90 via-brand-sienna-dark/20 to-transparent z-[1]" />

          <div className="relative z-10 w-full pb-16 pt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.1}>
                <span className="text-brand-terracotta text-sm font-semibold uppercase tracking-widest">Resort-Style Living</span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-10 font-[family-name:var(--font-playfair)]">
                  Your Pool Awaits
                </h2>
              </FadeIn>

              <div className="grid sm:grid-cols-3 gap-4">
                <FadeIn delay={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                    <svg className="w-8 h-8 text-brand-saffron mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h3 className="text-white font-semibold text-lg mb-1">Resort-Style Pool</h3>
                    <p className="text-white/60 text-sm">Sun-drenched relaxation</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                    <svg className="w-8 h-8 text-brand-saffron mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    <h3 className="text-white font-semibold text-lg mb-1">Outdoor Grilling</h3>
                    <p className="text-white/60 text-sm">Gather and grill al fresco</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                    <svg className="w-8 h-8 text-brand-saffron mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h3 className="text-white font-semibold text-lg mb-1">Scenic Dog Park</h3>
                    <p className="text-white/60 text-sm">A paradise for pups</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section - Image-Paired Panels */}
        <section id="amenities" className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <FadeIn delay={0.1}>
                <span className="text-brand-terracotta text-sm font-semibold uppercase tracking-widest">What We Offer</span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-sienna-dark mt-2 mb-4 font-[family-name:var(--font-playfair)]">
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
                  <h3 className="text-2xl font-semibold text-brand-sienna-dark mb-6 font-[family-name:var(--font-playfair)]">
                    Community Amenities
                  </h3>
                </FadeIn>
                <StaggerContainer
                  staggerDelay={0.06}
                  className="grid sm:grid-cols-2 gap-3"
                >
                  {communityAmenities.map((amenity, index) => (
                    <StaggerItem key={index}>
                      <div className="bg-white rounded-xl p-5 hover:shadow-lg hover:bg-brand-terracotta hover:text-white transition-all duration-300 group cursor-default">
                        <div className="text-brand-terracotta group-hover:text-white transition-colors mb-3">
                          {amenity.icon}
                        </div>
                        <h4 className="text-base font-semibold text-brand-sienna-dark group-hover:text-white transition-colors mb-1">
                          {amenity.title}
                        </h4>
                        <p className="text-sm text-brand-gray group-hover:text-white/80 transition-colors">
                          {amenity.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <FadeIn direction="right" delay={0.3}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hidden lg:block">
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                  <Image
                    src="/images/marbella-images-20.webp"
                    alt="Marbella Bay modern apartment bathroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <div>
                <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-semibold text-brand-sienna-dark mb-6 font-[family-name:var(--font-playfair)]">
                    Unit Amenities
                  </h3>
                </FadeIn>
                <StaggerContainer
                  staggerDelay={0.06}
                  className="grid sm:grid-cols-2 gap-3"
                >
                  {unitAmenities.map((amenity, index) => (
                    <StaggerItem key={index}>
                      <div className="bg-white rounded-xl p-5 hover:shadow-lg hover:bg-brand-turquoise hover:text-white transition-all duration-300 group cursor-default">
                        <div className="text-brand-turquoise group-hover:text-white transition-colors mb-3">
                          {amenity.icon}
                        </div>
                        <h4 className="text-base font-semibold text-brand-sienna-dark group-hover:text-white transition-colors mb-1">
                          {amenity.title}
                        </h4>
                        <p className="text-sm text-brand-gray group-hover:text-white/80 transition-colors">
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

        {/* Gallery Section - Dark background with masonry */}
        <section id="gallery" className="py-16 md:py-24 bg-brand-sienna-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn delay={0.1}>
                <span className="text-brand-terracotta text-sm font-semibold uppercase tracking-widest">Explore</span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4 font-[family-name:var(--font-playfair)]">
                  Photo Gallery
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
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
        <section id="availability" className="relative bg-brand-limewash">
          {/* Wave divider */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden h-12 -translate-y-full" aria-hidden="true">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 C300,60 900,0 1200,60 L1200,60 L0,60 Z" fill="var(--brand-limewash)" />
            </svg>
          </div>

          <div className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <FadeIn delay={0.1}>
                  <span className="text-brand-terracotta text-sm font-semibold uppercase tracking-widest">Find Your Home</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-sienna-dark mt-2 mb-4 font-[family-name:var(--font-playfair)]">
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
                <div className="border-t-4 border-brand-terracotta rounded-b-2xl bg-white shadow-xl overflow-hidden">
                  <AppFolioEmbed />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section - Split Color "Hacienda" Layout */}
        <section id="contact" className="relative overflow-hidden">
          {/* Split background */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div className="h-full w-full" style={{ background: 'linear-gradient(to right, var(--brand-terracotta) 0%, var(--brand-terracotta) 45%, var(--brand-cream) 45%)' }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left - Contact info on terracotta */}
              <FadeIn direction="left" delay={0.2}>
                <div className="text-white">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-[family-name:var(--font-playfair)]">
                    Come Say<br />Hola
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <div className="h-px w-8 bg-brand-saffron mb-3" />
                      <h4 className="font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                        Address
                      </h4>
                      <p className="text-white/70">
                        6155 Sienna Trails<br />
                        Beaumont, TX 77706
                      </p>
                    </div>

                    <div>
                      <div className="h-px w-8 bg-brand-saffron mb-3" />
                      <h4 className="font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+14098665800"
                        className="text-brand-saffron hover:text-white transition-colors"
                      >
                        (409) 866-5800
                      </a>
                    </div>

                    <div>
                      <div className="h-px w-8 bg-brand-saffron mb-3" />
                      <h4 className="font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:leasing@marbellabayapts.com"
                        className="text-brand-saffron hover:text-white transition-colors"
                      >
                        leasing@marbellabayapts.com
                      </a>
                    </div>

                    <div>
                      <div className="h-px w-8 bg-brand-saffron mb-3" />
                      <h4 className="font-semibold text-white/90 text-sm uppercase tracking-wider mb-1">
                        Office Hours
                      </h4>
                      <p className="text-white/70">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right - Form on cream */}
              <FadeIn direction="right" delay={0.3}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-brand-sienna-dark mb-6 font-[family-name:var(--font-playfair)]">
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map">
          <div className="border-t-4 border-brand-saffron">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-94.1574!3d30.0800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6155+Sienna+Trails%2C+Beaumont%2C+TX+77706!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marbella Bay Apartments location map"
              className="w-full"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-sienna-dark text-white">
        {/* Decorative top border */}
        <div className="h-1 bg-brand-terracotta" aria-hidden="true" />

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Logo & Description */}
              <div>
                <p className="text-2xl font-bold mb-4 italic font-[family-name:var(--font-playfair)]">
                  Marbella Bay
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  176 modern apartments in Beaumont, TX. Where resort-style
                  living meets everyday comfort and convenience.
                </p>
                {/* Social icons placeholder */}
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 bg-brand-terracotta/20 hover:bg-brand-terracotta rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 bg-brand-terracotta/20 hover:bg-brand-terracotta rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4 text-brand-saffron">Quick Links</h4>
                <nav className="space-y-2" aria-label="Footer navigation">
                  <Link href="#about" className="block text-gray-400 hover:text-brand-saffron transition-colors">
                    About Us
                  </Link>
                  <Link href="#amenities" className="block text-gray-400 hover:text-brand-saffron transition-colors">
                    Amenities
                  </Link>
                  <Link href="#gallery" className="block text-gray-400 hover:text-brand-saffron transition-colors">
                    Gallery
                  </Link>
                  <Link href="#availability" className="block text-gray-400 hover:text-brand-saffron transition-colors">
                    Availability
                  </Link>
                  <Link href="#contact" className="block text-gray-400 hover:text-brand-saffron transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Legal & Address */}
              <div>
                <h4 className="font-semibold mb-4 text-brand-saffron">Legal</h4>
                <nav className="space-y-2" aria-label="Legal navigation">
                  <Link
                    href="/accessibility"
                    className="block text-gray-400 hover:text-brand-saffron transition-colors"
                  >
                    Accessibility Statement
                  </Link>
                </nav>
                <div className="mt-6">
                  <p className="text-gray-400 text-sm">
                    6155 Sienna Trails<br />
                    Beaumont, TX 77706
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-terracotta/30 mt-8 pt-8 text-center text-gray-400 text-sm">
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
        </div>
      </footer>
    </>
  );
}
