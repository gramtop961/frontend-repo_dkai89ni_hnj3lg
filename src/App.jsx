import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
                <p className="mt-4 text-gray-600">
                  I’m a front-end engineer focused on building delightful user interfaces with clean, accessible code. I love blending
                  modern web tech with playful, interactive moments that make products feel alive.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                <dl className="grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-sm text-gray-600">Experience</dt>
                    <dd className="text-2xl font-semibold">5+ yrs</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Projects</dt>
                    <dd className="text-2xl font-semibold">30+</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Stack</dt>
                    <dd className="text-2xl font-semibold">React • Node</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Focus</dt>
                    <dd className="text-2xl font-semibold">UI • UX • 3D</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
