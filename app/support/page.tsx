import type { Metadata } from 'next'
import { Header, Footer } from '@/components/chrome'
import { APP_NAME, SUPPORT_EMAIL, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support',
  description: `Help with ${APP_NAME}: local backups, birthday reminders, Premium restore and purchase-data deletion.`,
  alternates: { canonical: `${SITE_URL}/support/` },
  openGraph: {
    title: `Support | ${APP_NAME}`,
    description: 'Answers about the private directory, local backups, birthday reminders and one-time Premium.',
    url: `${SITE_URL}/support/`,
    type: 'website',
  },
}

const faqs = [
  {
    "q": "Where is my data stored?",
    "a": "Your resident profiles, photos, notes, relationships and birthdays are stored locally. There is no account or directory server. You control exported backups; system backups may include app files according to device settings. RevenueCat and the stores process purchase information separately."
  },
  {
    "q": "Why does the app ask for contacts access?",
    "a": "Only when you choose to import a selected name and phone number into an editable resident profile. The app does not upload the imported details to us or RevenueCat. Those details can be included in a backup that you choose to export."
  },
  {
    "q": "Why does it ask for camera and photo access?",
    "a": "So you can attach a photo to a resident profile when you choose. The photo is stored locally and can be included in your exports or system device backups."
  },
  {
    "q": "How do birthday reminders work?",
    "a": "Add a person’s birthday and allow notifications to receive local birthday reminders. They work without a remote server or internet connection. The app does not schedule general tasks or borrowed-item reminders."
  },
  {
    "q": "How do I back up or move my directory?",
    "a": "Use Backup & Restore to export your directory and photos to a file, then import it on the other device. You choose how to save or transfer the file. There is no automatic app-managed synchronization; manage system backups separately in device settings."
  },
  {
    "q": "What is free and what does Premium unlock?",
    "a": "The free version supports one building and up to 15 residents. A single Premium Unlock purchase adds unlimited buildings and residents, with no subscription. The directory works offline. Purchases and restores require internet; RevenueCat checks Premium access at startup and during those flows."
  },
  {
    "q": "How do I restore Premium?",
    "a": "Use Restore Purchases on the paywall or in Settings with the same app-store account that made the purchase. Your local directory and exported backups are separate from Premium purchase records."
  },
  {
    "q": "How do I delete my data?",
    "a": "Delete entries in the app and manage exports or system backups separately. Uninstalling removes the app’s local files, not previously exported copies or store purchase records. Email support for a RevenueCat deletion request. Include a support ID from Settings when available, or a relevant store transaction identifier; do not send your directory, backup archive, card details or password."
  },
  {
    "q": "Which languages are available?",
    "a": "The app interface is available in English and Serbian. This support site is in English."
  }
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
