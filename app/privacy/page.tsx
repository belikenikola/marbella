import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Marbella Bay Apartments',
  description:
    'Privacy Policy for Marbella Bay Apartments. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-brand-dark py-4" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Marbella Bay Apartments"
                width={180}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
            <Link
              href="/"
              className="text-white hover:text-brand-blue-light transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Privacy Policy
          </h1>

          <p className="text-brand-gray mb-6">
            <strong>Last Updated:</strong> March 2026
          </p>

          <div className="prose prose-lg max-w-none text-brand-gray">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Introduction
              </h2>
              <p className="mb-4">
                Marbella Bay Apartments (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) respects your privacy and is committed to
                protecting the personal information you share with us. This
                Privacy Policy explains how we collect, use, and safeguard your
                information when you visit our website at
                www.marbellabayapartments.com.
              </p>
              <p>
                By using our website, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-brand-dark mb-3">
                Information You Provide
              </h3>
              <p className="mb-4">
                When you use our contact form or interact with our website, you
                may voluntarily provide:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name (first and last)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Message content</li>
              </ul>

              <h3 className="text-xl font-medium text-brand-dark mb-3">
                Information Collected Automatically
              </h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect certain
                information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>IP address (anonymized where possible)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  To respond to your inquiries submitted through our contact form
                </li>
                <li>To provide information about available apartments</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third
                parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Third-Party Services
              </h2>
              <p className="mb-4">
                Our website uses the following third-party services:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>AppFolio:</strong> Property listing and application
                  services. When you interact with the AppFolio widget, their
                  privacy policy applies.
                </li>
                <li>
                  <strong>Google Maps:</strong> Embedded map for property
                  location. Google&apos;s privacy policy applies to this
                  service.
                </li>
                <li>
                  <strong>Resend:</strong> Email delivery service used to
                  process contact form submissions.
                </li>
              </ul>
              <p>
                We encourage you to review the privacy policies of these
                third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Data Retention
              </h2>
              <p className="mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including to respond to your inquiries and comply with legal
                obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for data processing where applicable</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                information below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Cookies
              </h2>
              <p className="mb-4">
                Our website may use essential cookies necessary for the website
                to function properly. We do not use tracking cookies or
                third-party advertising cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="mb-4">
                Our website is not intended for children under the age of 13. We
                do not knowingly collect personal information from children. If
                you believe we have collected information from a child, please
                contact us so we can promptly remove it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+14098665800"
                    className="text-brand-blue hover:underline"
                  >
                    (409) 866-5800
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:marbellaleasing@mjspropertygroup.com"
                    className="text-brand-blue hover:underline"
                  >
                    marbellaleasing@mjspropertygroup.com
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> 6155 Sienna Trails, Beaumont, TX
                  77706
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8">
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
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
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
