import type { Metadata } from 'next'
import { Header, Footer } from '@/components/chrome'
import { APP_NAME, SUPPORT_EMAIL, LAST_UPDATED } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `The terms that govern your use of ${APP_NAME}.`,
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-5 py-16">
        <article className="prose-legal">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Terms of Use
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>

          <h2>Acceptance of terms</h2>
          <p>
            By downloading, installing, or using {APP_NAME} (&ldquo;the
            App&rdquo;), you agree to these Terms of Use. If you do not agree, do
            not use the App.
          </p>

          <h2>License</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable, revocable
            license to use the App for your own non-commercial purposes, subject
            to these terms and the rules of the app store you downloaded it
            from.
          </p>

          <h2>Your content and responsibilities</h2>
          <p>
            You are responsible for the information you enter into the App,
            including details about other people. You agree to use the App in
            compliance with applicable laws, including privacy laws, and to
            obtain any consent required before recording information about
            others. You are responsible for maintaining your own backups of your
            data.
          </p>

          <h2>In-app purchases</h2>
          <p>
            The App may offer paid features or subscriptions. Payments,
            renewals, and refunds are handled by the App Store or Google Play
            under their terms. Subscriptions renew automatically unless canceled
            through your store account.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, whether express or
            implied. We do not warrant that the App will be uninterrupted,
            error-free, or that data stored on your device cannot be lost.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for any
            indirect, incidental, or consequential damages, or for any loss of
            data, arising from your use of the App.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the App
            after changes take effect constitutes acceptance of the revised
            terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email us at{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
