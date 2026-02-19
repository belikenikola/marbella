import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Marbella Bay Apartments',
  description:
    'Accessibility Statement for Marbella Bay Apartments. Learn about our commitment to digital accessibility and WCAG 2.1 AA compliance.',
};

export default function AccessibilityPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-[var(--brand-navy)] py-4" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                Marbella{' '}
                <span className="text-[var(--brand-sand)]">Bay</span>
              </span>
            </Link>
            <Link
              href="/"
              className="text-white hover:text-[var(--brand-sand)] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-8">
            Accessibility Statement
          </h1>

          <p className="text-[var(--brand-gray)] mb-6">
            <strong>Last Updated:</strong> February 2025
          </p>

          <div className="prose prose-lg max-w-none text-[var(--brand-gray)]">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Our Commitment to Accessibility
              </h2>
              <p className="mb-4">
                Marbella Bay Apartments is committed to ensuring digital
                accessibility for people with disabilities. We are continually
                improving the user experience for everyone and applying the
                relevant accessibility standards.
              </p>
              <p>
                We believe that all people should have equal access to
                information about our apartments and services, regardless of
                ability or technology used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Conformance Status
              </h2>
              <p className="mb-4">
                The Web Content Accessibility Guidelines (WCAG) defines
                requirements for designers and developers to improve
                accessibility for people with disabilities. It defines three
                levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="mb-4">
                <strong>
                  Marbella Bay Apartments website is designed to conform to WCAG
                  2.1 Level AA standards.
                </strong>
              </p>
              <p>
                We have implemented the following measures to ensure
                accessibility:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Included accessibility as part of our design and development
                  process
                </li>
                <li>Conducted accessibility testing throughout development</li>
                <li>Applied semantic HTML structure</li>
                <li>Ensured keyboard navigation throughout the site</li>
                <li>Provided sufficient color contrast ratios</li>
                <li>Added alternative text for images</li>
                <li>Ensured form elements have proper labels</li>
                <li>Implemented focus indicators for interactive elements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Accessibility Features
              </h2>
              <p className="mb-4">
                Our website includes the following accessibility features:
              </p>

              <h3 className="text-xl font-medium text-[var(--brand-navy)] mb-3">
                Navigation
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Skip to main content link for keyboard users</li>
                <li>Consistent navigation structure across all pages</li>
                <li>Clear and descriptive link text</li>
                <li>Keyboard-accessible navigation menus</li>
                <li>Logical tab order throughout the site</li>
              </ul>

              <h3 className="text-xl font-medium text-[var(--brand-navy)] mb-3">
                Visual Design
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Sufficient color contrast between text and background</li>
                <li>Text can be resized up to 200% without loss of content</li>
                <li>No content relies solely on color to convey information</li>
                <li>Clear visual focus indicators on interactive elements</li>
                <li>Responsive design that works across device sizes</li>
              </ul>

              <h3 className="text-xl font-medium text-[var(--brand-navy)] mb-3">
                Content
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Alternative text for all meaningful images</li>
                <li>Proper heading hierarchy (H1, H2, H3, etc.)</li>
                <li>Descriptive page titles</li>
                <li>Form fields with associated labels</li>
                <li>Error messages that clearly identify issues</li>
              </ul>

              <h3 className="text-xl font-medium text-[var(--brand-navy)] mb-3">
                Interactive Elements
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All functionality available via keyboard</li>
                <li>ARIA landmarks and labels where appropriate</li>
                <li>Gallery carousel with keyboard navigation</li>
                <li>Modal dialogs that trap focus appropriately</li>
                <li>Reduced motion support for users who prefer it</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Compatibility
              </h2>
              <p className="mb-4">
                Our website is designed to be compatible with the following
                assistive technologies:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
              <p>
                The website is designed to work with current versions of major
                browsers including Chrome, Firefox, Safari, and Edge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Known Limitations
              </h2>
              <p className="mb-4">
                While we strive to ensure accessibility of our website, some
                limitations may exist:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Third-party content:</strong> Some embedded content
                  (such as Google Maps or property listing widgets) may not be
                  fully accessible, as they are controlled by third parties.
                </li>
                <li>
                  <strong>PDF documents:</strong> Some older PDF documents may
                  not be fully accessible. Please contact us if you need
                  information in an alternative format.
                </li>
              </ul>
              <p>
                We are actively working to address these limitations and improve
                accessibility across all content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Feedback and Assistance
              </h2>
              <p className="mb-4">
                We welcome your feedback on the accessibility of our website. If
                you encounter accessibility barriers or need information in an
                alternative format, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+14098665800"
                    className="text-[var(--brand-sand-dark)] hover:underline"
                  >
                    (409) 866-5800
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:leasing@marbellabayapts.com"
                    className="text-[var(--brand-sand-dark)] hover:underline"
                  >
                    leasing@marbellabayapts.com
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> 6155 Sienna Trails, Beaumont, TX
                  77706
                </li>
              </ul>
              <p className="mb-4">When contacting us, please include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The web page URL where you encountered the issue</li>
                <li>A description of the accessibility problem</li>
                <li>The assistive technology or browser you were using</li>
                <li>Your preferred method of contact</li>
              </ul>
              <p>
                We will make every effort to respond to your feedback within 2
                business days and work to resolve any issues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Physical Accessibility
              </h2>
              <p className="mb-4">
                Marbella Bay Apartments is committed to accessibility in our
                physical spaces as well. Our property features:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Accessible parking spaces</li>
                <li>Accessible pathways throughout the community</li>
                <li>Elevator access in buildings</li>
                <li>Accessible apartment units available</li>
                <li>Accessible common areas and clubhouse</li>
              </ul>
              <p>
                For specific questions about physical accessibility or to
                request accommodations during a tour, please contact our leasing
                office.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)] mb-4">
                Continuous Improvement
              </h2>
              <p>
                We are committed to continuously improving the accessibility of
                our website. We regularly review our site for accessibility
                issues and update our practices as standards evolve. This
                statement will be updated as we make improvements.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--brand-navy)] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Marbella Bay Apartments. All
            rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
