'use client';

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <FadeInSection direction="down" delay={0.2}>
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Tadabbur AI"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold text-black">Tadabbur AI</span>
          </Link>
        </header>
      </FadeInSection>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <FadeInSection delay={0.4}>
          <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 21, 2025</p>
        </FadeInSection>

        <div className="prose max-w-none">
          <FadeInSection delay={0.6}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Tadabbur AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our mobile application and services.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personal information such as your name, email address, and preferred language when you create an account or contact us for support.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Usage Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect information about how you interact with our app, including verses studied, search queries, and time spent reading, to improve your personalized experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Device Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect device-specific information such as your device model, operating system version, and unique device identifiers for app functionality and security purposes.
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide personalized AI-powered insights and recommendations</li>
                <li>Improve app functionality and user experience</li>
                <li>Send important updates and notifications about the app</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Ensure app security and prevent unauthorized access</li>
              </ul>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.9}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. Your study data is stored securely and is never shared with third parties without your explicit consent.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.0}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our app may use third-party services for analytics, crash reporting, and AI processing. These services have their own privacy policies, and we ensure they meet our standards for data protection.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.1}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information. You can also opt out of certain data collection practices. To exercise these rights, please contact us at privacy@tadabburai.com.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.2}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes through the app or via email. Your continued use of the app after changes indicates your acceptance of the updated policy.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.3}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: privacy@tadabburai.com</p>
                <p>Website: www.tadabburai.com</p>
              </div>
            </section>
          </FadeInSection>
        </div>

        <FadeInSection delay={1.4}>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
}