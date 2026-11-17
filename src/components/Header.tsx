export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line">
      <nav className="shell flex items-center justify-between py-5">
        <a href="#" className="text-xl tracking-tight text-ink logo-font">
          fatty.
        </a>
        <a
          href="#contact"
          className="bg-ink text-paper text-sm font-medium px-4 py-2 hover:bg-gray transition-colors"
        >
          Open for projects
        </a>
      </nav>
    </header>
  );
}
