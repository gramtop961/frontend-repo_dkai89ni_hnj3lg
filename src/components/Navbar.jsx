import { useState } from 'react'
import { Menu, X, Github, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-gray-900 text-lg">MyPortfolio<span className="text-blue-600">.</span></a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
