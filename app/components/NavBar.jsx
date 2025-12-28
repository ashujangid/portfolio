import Link from "next/link";

export default function Navbar () {
    return (
        <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="font-bold text-base">
                    Ashok Jangid
                </Link>

                <div className="flex gap-6 text-gray-600 text-sm">
                    <Link href="/about" className="hover:text-gray-900">About</Link>
                    <Link href="/experience" className="hover:text-gray-900">Experience</Link>
                    <Link href="/projects" className="hover:text-gray-900">Projects</Link>
                    <Link href="/contact" className="hover:text-gray-900">Contact</Link>
                </div>
            </div>
        </nav>
    )
}