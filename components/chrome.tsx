import Link from 'next/link'
import { Building2 } from 'lucide-react'
import { APP_NAME, SUPPORT_EMAIL } from '@/lib/site'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 size={18} />
          </span>
          <span>{APP_NAME}</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link href="/support/" className="hover:text-foreground">
            Support
          </Link>
          <Link href="/privacy/" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms/" className="hover:text-foreground">
            Terms
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy/" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms/" className="hover:text-foreground">
            Terms of Use
          </Link>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="hover:text-foreground"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
