'use client';

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";

export default function TermsOfUse() {
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
          <h1 className="text-4xl font-bold text-black mb-8">Terms of Use</h1>
          <p className="text-gray-600 mb-8">Last updated: January 21, 2025</p>
        </FadeInSection>

        <div className="prose max-w-none">
          <FadeInSection delay={0.6}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By downloading, installing, or using the Tadabbur AI mobile application, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our app.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tadabbur AI is a mobile application designed to enhance Quran study through AI-powered insights, personalized learning experiences, and intelligent analysis of Quranic text. Our service provides features including verse analysis, thematic connections, and personalized recommendations.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">User Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Appropriate Use</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to use the app respectfully and in accordance with Islamic principles. The app is intended for educational and spiritual purposes related to Quran study.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Account Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Prohibited Activities</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Attempting to gain unauthorized access to the app or its systems</li>
                    <li>Using the app for any illegal or unauthorized purpose</li>
                    <li>Interfering with or disrupting the app's functionality</li>
                    <li>Reverse engineering or attempting to extract source code</li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.9}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Tadabbur AI app, including its design, features, and AI algorithms, is protected by intellectual property laws. The Quranic text and translations used in the app are sourced from authentic and recognized sources, and we respect the sacred nature of this content.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.0}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">AI-Generated Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our AI provides insights and analysis to enhance your understanding of the Quran. While we strive for accuracy, AI-generated content should be considered as supplementary study material and not as authoritative religious interpretation. We encourage users to consult with qualified Islamic scholars for authoritative guidance.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.1}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Subscription and Payments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some features of Tadabbur AI may require a subscription. Subscription fees are billed according to the plan you select. You may cancel your subscription at any time through your device's app store settings. Refunds are subject to the app store's refund policy.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.2}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tadabbur AI is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app. Our liability is limited to the maximum extent permitted by law.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.3}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to the app at any time for violation of these terms or for any other reason. You may also terminate your use of the app at any time by deleting it from your device.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.4}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update these Terms of Use from time to time. We will notify you of any significant changes through the app or via email. Your continued use of the app after changes indicates your acceptance of the updated terms.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.5}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Use shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through appropriate legal channels.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.6}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: support@tadabburai.com</p>
                <p>Website: www.tadabburai.com</p>
              </div>
            </section>
          </FadeInSection>
        </div>

        <FadeInSection delay={1.7}>
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