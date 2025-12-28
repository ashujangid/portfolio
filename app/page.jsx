
export default function Home() {
  return (
    <section className="max-w-6xl mx-auto p-4 py-24">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Full Stack PHP Developer
      </h1>
      <div className="mb-12">
        <p className="text-lg text-gray-600 max-w-3xl">
          Results-driven developer with 5+ years of experience building
          scalable backend systems using Laravel, CodeIgniter, REST APIs,
          and performance-optimized databases.
        </p>
      </div>

      {/* Professional Summary */}
      <div className="mb-16 max-w-4xl">
        <h2 className="2xl font-semibold mb-4">
          Professional Summary
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Results-driven Full Stack PHP Developer with over 5 years of
          experience building enterprise-grade web applications. Specialized
          in Laravel, CodeIgniter, REST API design, and database performance
          optimization. Proven ability to architect scalable systems, integrate
          third-party services, and improve application performance through
          query optimization and Redis caching.
        </p>
      </div>

      {/* Key Skills */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Backend Engineering</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Laravel, CodeIgniter, CakePHP with strong focus on MVC
              architecture, REST APIs, JWT authentication, and scalable
              system design.
            </p>

          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Database & Performance</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              MySQL query optimization, indexing, schema design, and Redis
              caching resulting in up to 87% API response time improvement.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">
              Integrations & Payments
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Hands-on experience integrating Stripe, PayPal, Zoho CRM,
              OCR services, email APIs, and logistics platforms.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">
              Engineering Practices
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Clean code, version control, API versioning, performance
              tuning, system architecture, and mentoring junior developers.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-16">
        <a href="/projects" className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 mr-4">
          View Projects
        </a>
        <a href="/contacts" className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 mr-4">
          Contact Me
        </a>
      </div>
    </section>
  );
}