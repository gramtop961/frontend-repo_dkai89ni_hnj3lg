import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-blue-600" />
            Interactive 3D • Tech • Modern
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I craft delightful digital experiences at the intersection of design, code, and playful interactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
