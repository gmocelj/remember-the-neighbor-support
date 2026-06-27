import type { Metadata } from 'next'
import { Header, Footer } from '@/components/chrome'
import { APP_NAME, SUPPORT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support',
  description: `Get help with ${APP_NAME} — frequently asked questions and how to contact us.`,
}

const faqs = [
  {
    q: 'Where is my data stored?',
    a: 'Everything you add — neighbor profiles, photos, notes, and reminders — is stored locally on your device. We do not run servers that hold your data, and there is no account to sign up for.',
  },
  {
    q: 'Why does the app ask for contacts access?',
    a: 'Only so you can import a name and phone number to pre-fill a new neighbor profile, and only when you tap to do so. The app never uploads your contacts anywhere — the imported details stay on your device.',
  },
  {
    q: 'Why does it ask for camera and photo access?',
    a: 'So you can attach a photo to a neighbor profile, either by taking a new picture or choosing an existing one. Photos remain on your device.',
  },
  {
    q: 'How do reminders work?',
    a: 'Reminders are scheduled locally on your device using the system notification scheduler. They work without an internet connection and nothing is sent to us.',
  },
  {
    q: 'How do I back up or move my data to a new phone?',
    a: 'Use the in-app Backup & Restore feature to export your data to a file you control, then import that file on your new device.',
  },
  {
    q: 'What do in-app purchases unlock, and how do I restore them?',
    a: 'Purchases unlock premium features. Billing is handled by Apple or Google; we use RevenueCat to verify entitlements. If you reinstall or switch devices, use “Restore Purchases” in the app to recover what you bought.',
  },
  {
    q: 'How do I delete my data?',
    a: 'Because data lives only on your device, deleting a profile removes it, and uninstalling the app removes everything. See the Privacy Policy for details.',
  },
]

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Support</h1>
        <p className="mt-4 text-muted-foreground">
          Have a question or running into trouble? Email us at{' '}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-primary underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>{' '}
          and we&apos;ll get back to you. We typically reply within a couple of
          business days.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5"
            >
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-muted/40 p-6 text-center">
          <p className="text-muted-foreground">Still stuck?</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-3 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Contact Support
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
