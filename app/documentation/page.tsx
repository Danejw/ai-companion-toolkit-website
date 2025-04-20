'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Background from '@/app/components/Background';
import { motion } from "framer-motion";

export default function DocumentationPage() {
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
          <h1 className='text-4xl mb-4'>📚 </h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">Documentation</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium mt-8 mb-4">
            Everything you need to set up your own voice-enabled AI companion
          </p>
        </motion.div>

        {/* Project Overview */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-1 scale-105 -z-10"></div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">Your Own AI Companion</h2>
            <p className="text-lg text-gray-700 mb-6">
              This repo contains everything you need to run your own voice-enabled, personalized AI companion. 
              It includes a Next.js frontend and a FastAPI backend, with optional support for memory and login features.
            </p>
          </div>
            
          <div className='mx-8'>
            <h3 className="text-xl font-semibold mt-8 mb-3">What&lsquo;s Inside</h3>
            <div className="grid md:grid-cols-3 gap-4 justify-items-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100 w-full"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">📱</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">frontend/</code>
                </div>
                <p className="text-gray-700">The Next.js interface where you talk to your AI companion.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100 w-full"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">⚙️</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">backend/</code>
                </div>
                <p className="text-gray-700">The FastAPI service that handles AI logic, voice, and orchestration.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100 w-full"
              >
                <div className="text-lg font-medium mb-2 flex items-center">
                  <span className="text-[#818cf8] mr-2">🔧</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">user_config</code>
                </div>
                <p className="text-gray-700">A <code>user_config.json</code> file to customize your AI.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/70 to-indigo-50/50 rounded-full -z-10 rotate-6"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-[#818cf8] text-white rounded-full mr-3 text-sm">1</span>
            Prerequisites
          </h2>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#f3f4f6] p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">OpenAI API key</span>
                  <p className="text-gray-600 mt-1">
                    Get one <a href="https://platform.openai.com/account/api-keys" target="_blank" className="text-[#818cf8] hover:underline">here</a>
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-[#f3f4f6] p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">GitHub account</span>
                  <p className="text-gray-600 mt-1">Required to clone the repository</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-[#f3f4f6] p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Supabase account (Optional)</span>
                  <p className="text-gray-600 mt-1">For memory/login features in future upgrades</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Customize Your Companion */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.07] -z-10"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-[#818cf8] text-white rounded-full mr-3 text-sm">2</span>
            Customize Your Companion
          </h2>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">user_config.json</code> to define your AI:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`{
  "name": "Mira",
  "persona_prompt": "You are a compassionate journal companion...",
  "voice": "nova",
  "memory_enabled": false📚
}`}
            </div>
          </div>
        </section>

        {/* Deploy Backend */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform -rotate-1 scale-105 -z-10"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-[#818cf8] text-white rounded-full mr-3 text-sm">3</span>
            Deploy the Backend (Render)
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <ol className="list-decimal ml-5 space-y-5">
              <li className="text-gray-700">
                Go to <a href="https://render.com" target="_blank" className="text-[#818cf8] hover:underline">render.com</a> and click &quot;New +&quot; → Web Service
              </li>
              <li className="text-gray-700">Connect your GitHub repo and select the <code className="bg-gray-100 px-2 py-1 rounded">ai-companion</code> repository</li>
              <li className="text-gray-700">
                In the settings:
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
                  <li>Root Directory: <code className="bg-gray-100 px-2 py-1 rounded">backend</code></li>
                  <li>Environment: Python</li>
                  <li>Build Command: <code className="bg-gray-100 px-2 py-1 rounded">pip install -r requirements.txt</code></li>
                  <li>Start Command: <code className="bg-gray-100 px-2 py-1 rounded">uvicorn main:app --host 0.0.0.0 --port 10000</code></li>
                </ul>
              </li>
              <li className="text-gray-700">
                Add environment variable:
                <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm mt-2">OPENAI_API_KEY=your_openai_key_here</div>
              </li>
              <li className="text-gray-700">Click &quot;Deploy&quot;</li>
              <li className="text-gray-700">Copy your backend URL (e.g. <code className="bg-gray-100 px-2 py-1 rounded">https://ai-backend.onrender.com</code>)</li>
            </ol>
          </div>
        </section>

        {/* Deploy Frontend */}
        <section className="mb-16 relative">
          <div className="absolute -right-64 -left-64 h-[120%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-50/50 via-purple-50/70 to-indigo-50/50 rounded-full -z-10 rotate-6"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-[#818cf8] text-white rounded-full mr-3 text-sm">4</span>
            Deploy the Frontend (Vercel)
          </h2>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <ol className="list-decimal ml-5 space-y-5">
              <li className="text-gray-700">Go to <a href="https://vercel.com" target="_blank" className="text-[#818cf8] hover:underline">vercel.com</a> and add a new project</li>
              <li className="text-gray-700">Connect the same GitHub repo (<code className="bg-gray-100 px-2 py-1 rounded">ai-companion</code>)</li>
              <li className="text-gray-700">
                In the project settings:
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
                  <li>Root Directory: <code className="bg-gray-100 px-2 py-1 rounded">frontend</code></li>
                  <li>Framework: Next.js</li>
                </ul>
              </li>
              <li className="text-gray-700">
                Add environment variable:
                <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm mt-2">NEXT_PUBLIC_BACKEND_URL=https://ai-backend.onrender.com</div>
              </li>
              <li className="text-gray-700">Click &quot;Deploy&quot;</li>
            </ol>
            <div className="mt-6 bg-[#f0f9ff] border border-[#bae6fd] text-[#0c4a6e] p-4 rounded-lg">
              <p>Your frontend will now be live at something like <code className="bg-[#e0f2fe] px-2 py-1 rounded">https://your-companion.vercel.app</code></p>
            </div>
          </div>
        </section>

        {/* Talk to your AI */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-1 scale-105 -z-10"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-[#818cf8] text-white rounded-full mr-3 text-sm">5</span>
            Talk to Your AI
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <ol className="list-decimal ml-5 space-y-3">
                  <li className="text-gray-700">Visit your frontend Vercel URL</li>
                  <li className="text-gray-700">Press and hold the mic button</li>
                  <li className="text-gray-700">Start talking to your AI companion</li>
                </ol>
              </div>
              <div className="md:w-1/2 bg-[#f7f9fc] p-6 rounded-lg flex justify-center">
                <div className="bg-[#818cf8] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/95 to-purple-700/95 rounded-2xl shadow-xl -z-10"></div>
          <div className="absolute -right-10 top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-20 bottom-10 w-60 h-60 bg-indigo-300/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>
          <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
            
            <div className="border-b border-gray-200/50 pb-4">
              <h3 className="font-bold text-lg mb-2">My frontend can&apos;t connect to the backend.</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Double check that <code className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">NEXT_PUBLIC_BACKEND_URL</code> in <code className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">.env.local</code> points to the correct Render URL</li>
                <li>Make sure your backend is live and accessible (check Render logs)</li>
              </ul>
            </div>
            
            <div className="border-b border-gray-200/50 pb-4">
              <h3 className="font-bold text-lg mb-2">I&apos;m getting a 401 or OpenAI error.</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Make sure you added your <code className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">OPENAI_API_KEY</code> correctly in Render</li>
                <li>Ensure the key has access to GPT models (like gpt-4o)</li>
              </ul>
            </div>
            
            <div className="border-b border-gray-200/50 pb-4">
              <h3 className="font-bold text-lg mb-2">Voice isn&apos;t working.</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Check your browser permissions for microphone access</li>
                <li>Make sure you&apos;re pressing and holding the mic button</li>
              </ul> 
            </div>
            
            <div className="border-b border-gray-200/50 pb-4">
              <h3 className="font-bold text-lg mb-2">My deployment fails on Render.</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Confirm you set the root directory to <code className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">backend</code></li><br/>
                <li>
                  Use <code className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm mt-2">uvicorn main:app --host 0.0.0.0 --port 10000</code> as your start command
                  </li>
              </ul>
            </div>

            <div className="text-center mt-6">
              <p className="mb-3">Still stuck?</p>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href="https://github.com/Danejw/AI-Companion-Toolkit/issues" 
                  target="_blank"
                  className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Open an Issue
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-xl font-medium text-indigo-600">Here&apos;s the original Knolia website</p>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                href="https://www.knolia.org/"
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Go to the Knolia
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
