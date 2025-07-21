'use client';

import Image from "next/image";
import FadeInSection from "@/components/animations/FadeInSection";
import StaggerContainer, { staggerChildVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FadeInSection direction="down" delay={0.2}>
        <header className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Tadabbur AI"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold text-black">Tadabbur AI</span>
          </div>
        </header>
      </FadeInSection>

      <main className="flex flex-col items-center text-center px-6">
        <section className="max-w-4xl mx-auto pt-16 pb-12">
          <div className="flex flex-col items-center gap-8">
            <FadeInSection delay={0.4}>
              <div className="flex flex-col items-center gap-1">              
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/app-icon.png"
                    alt="Tadabbur AI"
                    width={120}
                    height={120}
                    className="rounded-3xl"
                  />
                </motion.div>
                <h1 className="text-xl font-semibold text-black">Tadabbur AI</h1>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.6}>
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Enhance your Quran study with AI-powered insights
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover deeper meanings and connections in the Quran through intelligent analysis and personalized learning experiences
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/app_store.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="bg-gray-200 rounded-lg cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/google_play.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="bg-gray-200 rounded-lg cursor-pointer"
                  />
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16">
          <StaggerContainer 
            staggerDelay={0.15} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center"
          >
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-1.png"
                    alt="App Screenshot 1"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-2.png"
                    alt="App Screenshot 2"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-3.png"
                    alt="App Screenshot 3"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-4.png"
                    alt="App Screenshot 4"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-5.png"
                    alt="App Screenshot 5"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>
      </main>
    </div>
  );
}
