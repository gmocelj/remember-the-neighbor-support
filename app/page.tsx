import Link from 'next/link'
import {
  Building2,
  Users,
  BellRing,
  ShieldCheck,
  Import,
  Camera,
} from 'lucide-react'
import { Header, Footer } from '@/components/chrome'
import { APP_NAME, APP_TAGLINE, APP_STORE_URL, PLAY_STORE_URL, SUPPORT_EMAIL } from '@/lib/site'

const features = [
  {
    icon: Users,
    title: 'A profile for every neighbor',
    body: 'Name, photo, apartment, and any detail you want to remember — all in one tidy place.',
  },
  {
    icon: Building2,
    title: 'Organized by building',
    body: 'Organize residents by building, entrance, floor and apartment so you remember who lives where.',
  },
  {
    icon: Import,
    title: 'Import from contacts',
    body: 'Pull a name and number from your contacts to pre-fill a profile — only when you choose to.',
  },
  {
    icon: Camera,
    title: 'Add a photo',
    body: 'Attach a locally stored photo so names and faces finally click. Include it in a backup when you choose.',
  },
  {
    icon: BellRing,
    title: 'Birthday reminders',
    body: 'Add birthdays and enable local notifications to remember a neighbor’s special day, without a push server.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    body: 'No account, no sign-up. Your neighbor data lives on your device, not on our servers.',
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <ShieldCheck size={15} className="text-primary" />
            Private by design — no account required
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            {APP_TAGLINE}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            {APP_NAME} helps you keep track of the people around you — names,
            faces, units, and the little details — so your neighborhood always
            feels familiar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {APP_STORE_URL && (
              <a href={APP_STORE_URL} className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
                Download on the App Store
              </a>
            )}
            {PLAY_STORE_URL && (
              <a href={PLAY_STORE_URL} className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
                Get it on Google Play
              </a>
            )}
            <Link
              href="/support/"
              className="rounded-lg border border-border bg-card px-6 py-3 font-semibold transition hover:bg-muted"
            >
              Get Support
            </Link>
            <Link
              href="/privacy/"
              className="rounded-lg border border-border bg-card px-6 py-3 font-semibold transition hover:bg-muted"
            >
              Read Privacy Policy
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Built for iOS and Android. The interface is available in English and Serbian.
          </p>
        </section>

        {/* Features */}
        <section className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-center text-3xl font-bold">
              Remember names, faces and apartments
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold">Start with your own building</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Free for one building and up to 15 residents. A one-time Premium Unlock
            adds unlimited buildings and residents, with no subscription.
            Your local directory works offline; purchases and restores need internet.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Export a backup through your device’s sharing options when you choose.
            System backups may also include app data according to your settings.
            RevenueCat checks Premium access at startup and handles purchases and
            restores with the stores; it does not receive your resident profiles.
          </p>
        </section>

        {/* Support teaser */}
        <section className="mx-auto max-w-5xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold">Need a hand?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We&apos;re a small team and we read every message. Questions,
            feedback, or trouble with the app — reach out anytime.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Email {SUPPORT_EMAIL}
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
