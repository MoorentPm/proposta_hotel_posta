export default function Footer() {
  return (
    <footer className="bg-stone-100 py-12">
      <div className="flex flex-col items-center gap-4 w-full px-8">
        <div className="font-headline text-lg tracking-tight text-on-surface">
          Moorent Pm
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { href: 'mailto:info@moorentpm.it', label: 'info@moorentpm.it' },
            { href: 'https://moorentpm.it', label: 'moorentpm.it' },
            { href: 'https://linktr.ee/moorentpm', label: 'linktr.ee/moorentpm' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label text-xs uppercase tracking-widest no-underline"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-4">
          © 2025 Moorent Pm. Property Management · Triveneto.
        </p>
      </div>
    </footer>
  )
}
