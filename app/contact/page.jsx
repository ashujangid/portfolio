
export default function ContactPage() {
    return (
        <section className="max-w-6xl mx-auto p-4 py-20">
            <h1 className="text-3xl font-bold mb-6">
                Contact
            </h1>

            <p className="text-gray-700 max-w-2xl mb-12">
                If you would like to discuss opportunities, projects, or collaborations,
                feel free to reach out. I am always open to connecting with teams and
                professionals working on meaningful products.
            </p>

            <div className="space-y-6 text-gray-700">
                <div>
                    <p className="font-medium">Email</p>
                    <p>
                        <a
                            href="mailto:ashhjjangid@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            ashhjjangid@gmail.com
                        </a>
                    </p>
                </div>

                <div>
                    <p className="font-medium">Phone</p>
                    <p>
                        <a
                            href="tel:+918450928556"
                            className="text-blue-600 hover:underline"
                        >
                            +91 84509 28556
                        </a>
                    </p>
                </div>

                <div>
                    <p className="font-medium">LinkedIn</p>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/ashu-k-jangid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            linkedin.com/in/ashu-k-jangid
                        </a>
                    </p>
                </div>

                <div>
                    <p className="font-medium">Location</p>
                    <p>Jaipur, India</p>
                </div>
            </div>
        </section>
    );
}