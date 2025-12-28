

export default function ProjectPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-12">
                Professional Experience
            </h1>
            {/* Scupe AI */}
            <div className="mb-16">
                <h2 className="text-xl font-semibold mb-2">
                    Scupe AI – Visitor Intelligence Platform
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    A B2B visitor intelligence platform designed to track website visitors,
                    generate actionable leads, and provide behavioral insights for client
                    websites through embedded scripts.
                </p>

                <ul className="list-disc space-y-3 text-gray-700 leading-relaxed">
                    <li>
                        Designed and developed REST APIs using Python to generate tracking
                        scripts, collect visitor data, and perform real-time lead profiling.
                    </li>
                    <li>
                        Integrated backend APIs with a PHP-based frontend, enabling users
                        to register websites, embed scripts, and view visitor analytics.
                    </li>
                    <li>
                        Led backend architecture and API design while coordinating with a
                        4-member team and mentoring junior developers on API integration.
                    </li>
                    <li>
                        Built scalable data pipelines to support high-volume traffic from
                        multiple client websites.
                    </li>
                </ul>

                <p className="text-gray-600 mt-4 text-sm">
                    Tech Stack: Python, REST APIs, PHP, MySQL, JavaScript
                </p>
            </div>

            {/* RidePico */}
            <div className="mb-16">
                <h2 className="text-xl font-semibold mb-2">
                    RidePico – Electric Bike Rental Platform
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    A full-scale electric bike rental platform enabling users to browse
                    products, choose rental plans, complete KYC verification, and make
                    secure online payments.
                </p>

                <ul className="list-discspace-y-3 text-gray-700 leading-relaxed">
                    <li>
                        Architected and developed a scalable backend using CodeIgniter and
                        MySQL to manage product catalogs, rental plans, user verification,
                        and automated workflows.
                    </li>
                    <li>
                        Integrated Stripe for secure payment processing and automated
                        billing across weekly and monthly rental plans.
                    </li>
                    <li>
                        Implemented real-time Zoho CRM integration for lead creation,
                        deal tracking, and order reconciliation, reducing manual operations
                        by approximately 70%.
                    </li>
                    <li>
                        Optimized high-traffic APIs through query optimization and caching
                        strategies to ensure consistent performance under load.
                    </li>
                </ul>

                <p className="mt-4 text-sm text-gray-600">
                    Tech Stack: CodeIgniter, PHP, MySQL, Stripe, Zoho CRM, Redis
                </p>
            </div>

            {/* White Star Water */}
            <div>
                <h2 className="text-xl font-semibold mb-2">
                    White Star Water – Testing & Lead Management Platform
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    A Laravel-based platform designed to manage customer onboarding,
                    service requests, and automated document workflows for water testing
                    and lead generation.
                </p>

                <ul className="list-discspace-y-3 text-gray-700 leading-relaxed">
                    <li>
                        Developed a Laravel application with secure customer onboarding,
                        lead management, and role-based admin dashboards.
                    </li>
                    <li>
                        Implemented automated PDF generation with digital signature
                        support, including a signature pad and drag-and-drop placement
                        functionality.
                    </li>
                    <li>
                        Integrated automated email notifications and streamlined document
                        workflows to reduce manual processing time.
                    </li>
                    <li>
                        Focused on clean backend logic, secure data handling, and optimized
                        performance for administrative workflows.
                    </li>
                </ul>

                <p className="mt-4 text-sm text-gray-600">
                    Tech Stack: Laravel, PHP, MySQL, PDF Generation
                </p>
            </div>
        </section>
    );
}