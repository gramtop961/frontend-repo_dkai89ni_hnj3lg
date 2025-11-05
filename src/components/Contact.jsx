import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let’s build something</h2>
          <p className="mt-3 text-gray-600">Have a project in mind or just want to say hi? I’m always open to new collaborations.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Get in touch</h3>
            <p className="mt-2 text-sm text-gray-600">Drop me a line and I’ll get back to you soon.</p>
            <a
              href="mailto:hello@example.com"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              <Mail className="h-4 w-4" /> hello@example.com
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">What I do</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>Front-end development with React</li>
              <li>Interaction and motion design</li>
              <li>Design systems and component libraries</li>
              <li>API design and full-stack integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
