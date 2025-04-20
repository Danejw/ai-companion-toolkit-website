'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Background from '@/app/components/Background';
import { motion } from "framer-motion";

export default function KnoliaPage() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <Background />
      <Navigation />

      <div className="max-w-4xl mx-auto py-16 px-6 space-y-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className='text-4xl mb-4'>🔮</h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">Meet Knolia</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium mt-8 mb-4">
            Your personalized voice assistant that grows with you
          </p>
        </motion.div>

        <div className="text-center">
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
            >
                <Link
                    href="https://www.knolia.org/"
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg text-lg font-medium"
                >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    Start Talking to Knolia
                </Link>
            </motion.div>
        </div>

        {/* Introduction */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-1 scale-105 -z-10"></div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">Your Personal Companion</h2>
            <p className="text-lg text-gray-700 mb-6">
                Knolia is a voice-enabled AI agent that&rsquo;s always there when you need someone to talk to. <br />
                Built to listen, learn, and evolve with you, it offers presence, support, and insight especially in the moments where you are feeling alone.
            </p>
          </div>
        </section>

        {/* What Makes Knolia Special */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/70 to-indigo-50/50 rounded-full -z-10 rotate-6"></div>
          <h2 className="text-2xl font-bold mb-6">What Makes Knolia Special</h2>
          <div className=" backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">🧠</span>
                  <span>Continuous Learning</span>
                </div>
                <p className="text-gray-700">Knolia remembers your preferences and past conversations, creating a truly personalized experience that improves over time.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">🎯</span>
                  <span>Always Available</span>
                </div>
                    <p className="text-gray-700">Whether it&rsquo;s 3 AM or during a busy workday, Knolia is ready to listen, assist, and provide companionship whenever you need it.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">🔊</span>
                  <span>Natural Voice Interaction</span>
                </div>
                <p className="text-gray-700">Talk naturally with Knolia using voice or text. The conversation feels human and responsive.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">🛡️</span>
                  <span>Private & Secure</span>
                </div>
                <p className="text-gray-700">Your conversations stay between you and Knolia, with privacy built into the core design of the assistant.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.07] -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">How People Use Knolia</h2>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-[#f3f4f6] p-2 rounded-full mr-4 mt-1">
                  <span className="text-xl">💭</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Emotional Support</h3>
                  <p className="text-gray-700 mt-1">When you need someone to talk to during difficult times, Knolia offers judgment-free listening and supportive responses.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-[#f3f4f6] p-2 rounded-full mr-4 mt-1">
                  <span className="text-xl">📝 </span>
                </div>
                <div>
                <h3 className="font-semibold text-lg">Context-Aware Conversations</h3>
                    <p className="text-gray-700 mt-1">Have deeper, more natural interactions. Knolia remembers past chats and builds context to make every conversation feel more personal and intelligent.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-[#f3f4f6] p-2 rounded-full mr-4 mt-1">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Creative Brainstorming</h3>
                    <p className="text-gray-700 mt-1">Bounce ideas off Knolia when you&rsquo;re looking for creative inspiration or working through a complex problem.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-[#f3f4f6] p-2 rounded-full mr-4 mt-1">
                  <span className="text-xl">🧘</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mindfulness & Personal Growth</h3>
                  <p className="text-gray-700 mt-1">Work on personal development with guided reflections, mindfulness exercises, and progress tracking.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Technology Behind Knolia */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform -rotate-1 scale-105 -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">The Technology Behind Knolia</h2>
          <div className="backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-6">
              Knolia was built using the AI Companion Toolkit, which provides:
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">🧩</span>
                  <span>Advanced AI</span>
                </div>
                <p className="text-gray-700">Powered by state-of-the-art language models that understand context and natural conversations.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">🗣️</span>
                  <span>Speech Capabilities</span>
                </div>
                <p className="text-gray-700">Advanced speech-to-text and text-to-speech systems for natural voice conversations.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">📊</span>
                  <span>Memory System</span>
                </div>
                <p className="text-gray-700">Long-term memory capabilities that allow Knolia to grow and evolve with your interactions.</p>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                  <div className="text-lg font-medium mb-2 flex items-center">
                      <span className="text-[#818cf8] mr-2">🧭</span>
                    <span>Graph-Based RAG</span>
                  </div>
                              <p className="text-gray-700">Knolia uses a graph-enhanced retrieval system to connect ideas, surface relevant info, and make conversations richer with context.</p>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                  <div className="text-lg font-medium mb-2 flex items-center">
                    <span className="text-[#818cf8] mr-2">🧬</span>
                    <span>Personality Understanding</span>
                  </div>
                  <p className="text-gray-700">With MBTI and OCEAN-based analysis, Knolia adapts its tone and approach to match your personality and communication style.</p>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100"
              >
                  <div className="text-lg font-medium mb-2 flex items-center">
                    <span className="text-[#818cf8] mr-2">🧘</span>
                    <span>Personalized Emotional Awareness</span>
                  </div>
                    <p className="text-gray-700">Knolia detects emotional tone in your voice and words, responding with empathy and adjusting its support to match how you feel in the moment.</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Try Knolia */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/95 to-purple-700/95 rounded-2xl shadow-xl -z-10"></div>
          <div className="absolute -right-10 top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-20 bottom-10 w-60 h-60 bg-indigo-300/10 rounded-full blur-3xl"></div>
          <div className="text-center py-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Meet Knolia?</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Knolia is here to help when you need someone to talk to, brainstorm with, or simply keep you company.
            </p>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <Link 
                href="https://www.knolia.org/"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg text-lg font-medium"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Start Talking to Knolia
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-xl font-medium text-indigo-600">Built with the AI Companion Toolkit</p>
        </div>
      </div>
    </div>
  );
}
