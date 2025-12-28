

export default function AboutPage() {
    return (
        <section className="max-w-6xl mx-auto p-4 py-20">
            {/* About Me */}
            <div className="max-w-4xl mb-16">
                <h1 className="text-3xl font-bold mb-4">
                    About Me
                </h1>

                <p className="text-gray-700 leading-relaxed">
                    I am a results-driven Full Stack PHP Developer with over 5 years of
                    experience building scalable, high-performance web applications.
                    My core expertise lies in backend engineering using Laravel,
                    CodeIgniter, and CakePHP, with a strong focus on REST API design,
                    database optimization, and system architecture.
                </p>
                <p className=" text-gray-700 leading-relaxed mt-4">
                    Over the years, I have worked on enterprise-grade platforms involving
                    subscription billing, OCR-based verification, CRM integrations, and
                    payment gateway workflows. I enjoy solving performance bottlenecks,
                    optimizing database queries, and building systems that scale
                    efficiently under real-world load.
                </p>
            </div>
            {/* Backend Expertise */}
            <div className="mb-16">
                <h2 className="text-2xl  font-semibold mb-6">
                    Backend Engineering
                </h2>
                <ul className="list-disc space-y-3 text-gray-700">
                    <li className="">
                        Strong experience with PHP frameworks including Laravel,
                        CodeIgniter, and CakePHP following MVC architecture.
                    </li>
                    <li className="">
                        Designed and developed versioned REST APIs with JWT
                        authentication for secure client-server communication.
                    </li>
                    <li className="">
                        Built scalable backend systems handling subscriptions,
                        document verification, and third-party service integrations.
                    </li>
                    <li className="">
                        Hands-on experience using Node.js and Express.js for building REST APIs and backend services alongside primary PHP-based systems.
                    </li>
                </ul>
            </div>
            {/* Frontend Expertise */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">
                    Frontend & Client-Side Development
                </h2>

                <ul className="list-disc space-y-3 text-gray-700">
                    <li>
                        Proficient in JavaScript with hands-on experience using jQuery
                        and AJAX for dynamic client-side interactions.
                    </li>
                    <li>
                        Developed responsive user interfaces using Bootstrap and
                        modern CSS practices.
                    </li>
                    <li>
                        Worked closely with frontend teams to integrate APIs and
                        ensure seamless user experiences.
                    </li>
                </ul>
            </div>

            {/* Databases & Performance */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">
                    Databases & Performance Optimization
                </h2>
                <ul className="list-disc space-y-3 text-gray-700">
                    <li>
                        Advanced experience with MySQL including query optimization,
                        indexing strategies, and schema design.
                    </li>
                    <li>
                        Improved API response times by up to 87% through performance
                        tuning and Redis caching implementations.
                    </li>
                    <li>
                        Experience working with MongoDB for document-based data
                        storage and Redis for caching and performance improvements.
                    </li>
                </ul>
            </div>

            {/* Tools & Integrations */}
            <div>
                <h2 className="text-2xl font-semibold mb-6">
                    Tools, DevOps & Integrations
                </h2>

                <ul className="list-disc space-y-3 text-gray-700">
                    <li>
                        Version control using Git with collaborative workflows and
                        code reviews.
                    </li>
                    <li>
                        Integrated multiple third-party services including Stripe,
                        PayPal, Zoho CRM, OCR services, and email APIs.
                    </li>
                    <li>
                        Experience in system architecture planning, API versioning,
                        and mentoring junior developers.
                    </li>
                </ul>
            </div>
        </section>
    );
}