import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-grey-800 bg-gradient-to-br from-slate-100 to-slate-200">
      <header className="sticky top-0 z-50 bg-white shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Naman Soni</h1>
        <nav className="space-x-4">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#tools" className="hover:underline">Tools</Link>
          <Link href="#experience" className="hover:underline">Experience</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>
      <main></main>
      <footer className="py-6 text-center text-gray-600">© 2025 Naman Soni. All rights reserved.</footer>
    </div>
  );
}
