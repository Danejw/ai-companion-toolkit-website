'use client';

import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import Background from "./components/Background";

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <Background />
      <Navigation />
      <div className="max-w-4xl mx-auto py-16 px-6 space-y-24 relative">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl">🧠</h1>
            <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
              The AI Companion Toolkit
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Build and own your own voice-enabled AI assistant, in under an hour.
            </p>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto shadow-sm border border-gray-100 relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-50/40 to-purple-50/40 mix-blend-overlay"></div>
              <p className="text-gray-600 relative">
                Most devs spend <strong className="text-indigo-600">months</strong> wiring up voice, chat, and streaming logic.<br /><br />
              </p>
              <p className="text-gray-600 relative">
                But <strong className="text-indigo-600">Good News</strong> for you, I spent that time so you don&apos;t have to.<br /><br />
              </p>
              <p className="text-gray-600 relative">
                This toolkit allow you to get your ideas flowing <strong className="text-indigo-600">NOW</strong>.<br />
              </p>
            </div>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="https://danejw.gumroad.com/l/AI-Companion-Toolkit"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-0.5"
              >
                👉 Get the Toolkit here
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Problem Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-1 scale-105 -z-10"></div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full opacity-60"></div>
            <h2 className="text-3xl font-bold text-gray-900">🚧 Let&apos;s Be Honest, You&apos;ve Probably Tried Already</h2>
            <div className="space-y-4 text-lg">
              <p className="text-gray-700">
                You&apos;ve opened a Whisper demo and watched it break. You&apos;ve written a prompt that works once and forgets everything after. You&apos;ve spent hours tweaking UI state or stuck wondering how to send audio through a socket.
              </p>
              <p className="text-gray-700">
                It&apos;s not hard because you&apos;re doing it wrong. It&apos;s hard because it&apos;s fragmented, undocumented, and constantly changing.
              </p>
              <p className="text-gray-700">
                This toolkit is built from <strong className="text-indigo-600">real-world battle scars</strong> and turns all that chaos into a deployable, modular system you can build on.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-8 relative">
          <div className="absolute -right-64 -left-64 h-[120%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-50/50 via-purple-50/70 to-indigo-50/50 rounded-full -z-10 rotate-6"></div>
          <h2 className="text-3xl font-bold text-center text-gray-900">⚙️ What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Full-Stack: Next.js frontend + FastAPI backend",
              "Real-time voice streaming with WebSocket + TTS",
              "Memory system powered by config",
              "Whisper transcription + OpenAI chat",
              "Deploy templates + `.env` examples",
              "Clean structure, ready for extension"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100 flex items-center"
              >
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Build Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.07] -z-10"></div>
          <div className="bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl p-8 shadow-sm border border-indigo-100 space-y-5 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-transparent rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">🚀 What You Can Build in One Weekend</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "A journaling companion with a voice interface",
                "A personal AI coach that reflects your tone",
                "A branded AI assistant that lives on your domain",
                "A foundation for a full-on AI product or startup"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-indigo-100 flex"
                >
                  <div className="text-indigo-600 mr-3 text-xl">✦</div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* For Indie Devs Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform -rotate-1 scale-105 -z-10"></div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 space-y-5 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full opacity-60"></div>
            <h2 className="text-3xl font-bold text-gray-900">👨‍💻 Built for Indie Devs, Creators & Hackers</h2>
            <div className="space-y-4 text-lg">
              <p className="text-gray-700">
                You control the keys. You control the domain. You control the vibe.
              </p>
              <p className="text-gray-700">
                This toolkit is for builders who want to ship something real, without wasting weeks duct-taping together APIs and hoping it&apos;ll scale.
              </p>
              <p className="text-gray-700">
                Whether you&apos;re creating a personal project or launching your own AI-powered product, <strong className="text-indigo-600">this gets you to launch fast.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="space-y-6 relative">
          <div className="absolute -inset-x-32 top-1/2 -translate-y-1/2 h-full bg-gradient-to-r from-blue-50/50 via-indigo-50/50 to-blue-50/50 -z-10 rounded-full rotate-3"></div>
          <h2 className="text-3xl font-bold text-center text-gray-900 relative">🧪 How It Works</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-r from-indigo-50 to-purple-50"></div>
            {[
              "Buy the Toolkit via Gumroad",
              "Get instant access to the private GitHub repo",
              "Fork it, edit your user_config.json, plug in your OpenAI key",
              "Deploy in minutes to Render & Vercel",
              "Start talking to your AI on your domain, your terms"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-center p-4 border-b border-gray-100 last:border-b-0 relative"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0 shadow-md">
                  {i + 1}
                </div>
                <span className="text-gray-700">{item.replace("user_config.json", "<code>user_config.json</code>")}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/95 to-purple-700/95 rounded-2xl shadow-xl -z-10"></div>
          <div className="absolute -right-10 top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-20 bottom-10 w-60 h-60 bg-indigo-300/10 rounded-full blur-3xl"></div>
          <div className="p-8 space-y-5 relative">
            <h2 className="text-3xl font-bold">🔒 One-Time Purchase. Lifetime Use.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "No subscriptions",
                "No licensing traps",
                "No hidden fees",
                "Just clean code, ready to fork and launch"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="flex items-center"
                >
                  <div className="mr-3">
                    <svg className="w-5 h-5 text-indigo-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="https://danejw.gumroad.com/l/AI-Companion-Toolkit"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-0.5"
                >
                  👉 Get the AI Companion Toolkit
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-sm text-gray-600 text-center pt-6 border-t border-gray-200">
          Built by <Link href="https://github.com/Danejw" className="text-indigo-600 font-bold hover:underline">Danejw</Link> -- a dev who&apos;s shipped real-time AI systems across XR, voice, and companion tools.
        </div>
      </div>
    </div>
  );
}
