

export default function ExperiencePage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-12">
                Professional Experience
            </h1>

            {/* Evozone */}
            <div className="mb-16">
                <h2 className="text-xl font-semibold">
                    Backend Developer (PHP)
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                    Evozone Technolabs Pvt. Ltd. · Jaipur, India · Apr 2022 – Present
                </p>
                <ul className="list-disc space-y-3 text-gray-700 leading-relaxed">
                    <li>
                        Architected and developed multiple Laravel-based applications
                        involving OCR document verification, subscription
                        billing systems, Elasticsearch integration, and versioned REST APIs
                        secured with JWT authentication.
                    </li>
                    <li>
                        Optimized MySQL queries and implemented Redis caching strategies,
                        reducing average API response time from 2.1 seconds to 280 ms,
                        resulting in an 87% performance improvement and 4× scalability gain.
                    </li>
                    <li>
                        Led end-to-end backend development including system architecture
                        design, database schema optimization, payment gateway integration,
                        and code reviews for mission-critical modules.
                    </li>
                    <li>
                        Collaborated closely with frontend and product teams to design
                        scalable APIs, ensure clean data contracts, and deliver
                        production-ready features under tight timelines.
                    </li>
                </ul>
            </div>

            {/* UWS */}
            <div className="mb-16">
                <h2 className="text-xl font-semibold">
                    PHP Developer
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                    UWS Inc. · Jaipur, India · Apr 2021 – Mar 2022
                </p>
                <ul className="list-disc space-y-3 text-gray-700 leading-relaxed">
                    <li>
                        Developed applications using CakePHP, supporting
                        complex workflow automation, payment gateway integrations, CRM
                        synchronization, and third-party logistics system connectivity.
                    </li>
                    <li>
                        Improved system reliability and reduced Mean Time To Resolution
                        (MTTR) by approximately 50% through structured logging, proactive
                        monitoring, and systematic root-cause analysis.
                    </li>
                    <li>
                        Mentored junior developers by conducting code reviews, sharing
                        best practices, and supporting Agile development processes.
                    </li>
                </ul>
            </div>

            {/* Xtreem */}
            <div>
                <h2 className="text-xl font-semibold">
                    Junior PHP Developer
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                    Xtreem Solution · Jaipur, India · Nov 2019 – Dec 2020
                </p>

                <ul className="list-disc space-y-3 text-gray-700 leading-relaxed">
                    <li>
                        Contributed to high-traffic platforms featuring dynamic
                        booking systems, payment integration, and automated
                        email notifications using PHP, jQuery, AJAX, and Bootstrap.
                    </li>
                    <li>
                        Improved database performance by approximately 60% through MySQL
                        query optimization, indexing, and schema refinement.
                    </li>
                    <li>
                        Resolved 200+ production issues with a high first-time fix rate by
                        analyzing logs, debugging application flows, and collaborating
                        with senior engineers.
                    </li>
                </ul>
            </div>
        </section>
    );
}