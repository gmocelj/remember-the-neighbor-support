import type { Metadata } from 'next'
import { Header, Footer } from '@/components/chrome'
import { APP_NAME, SUPPORT_EMAIL, LAST_UPDATED } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${APP_NAME} handles your information. Short version: your data stays on your device.`,
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-5 py-16">
        <article className="prose-legal">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>

          <h2>Overview</h2>
          <p>
            {APP_NAME} (&ldquo;the App&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            is built to be private by default. The App does not require an
            account, and the information you create — neighbor profiles, photos,
            notes, and reminders — is stored locally on your device. We do not
            operate servers that collect or store this content. This policy
            explains the few cases where data is processed and by whom.
          </p>

          <h2>Information stored on your device</h2>
          <p>
            The following is stored <strong>only on your device</strong> and is
            never transmitted to us:
          </p>
          <ul>
            <li>Neighbor profiles (names, unit/house numbers, notes)</li>
            <li>Photos you take or select for a profile</li>
            <li>Contact details you choose to import</li>
            <li>Reminders and app settings</li>
          </ul>
          <p>
            If you create a backup file using the in-app Backup &amp; Restore
            feature, that file is saved to a location you choose and remains
            under your control.
          </p>

          <h2>Device permissions</h2>
          <h3>Contacts</h3>
          <p>
            With your permission, the App can read a contact so its name and
            phone number can pre-fill a new neighbor profile. This happens only
            when you initiate an import. Contacts are not uploaded, shared, or
            stored anywhere outside your device.
          </p>
          <h3>Camera and Photos</h3>
          <p>
            With your permission, the App can use the camera or your photo
            library so you can attach a photo to a profile. Photos stay on your
            device.
          </p>
          <h3>Notifications and reminders</h3>
          <p>
            With your permission, the App schedules local notifications to
            remind you about things you set up. These reminders are generated on
            your device and are not sent through our servers.
          </p>

          <h2>In-app purchases</h2>
          <p>
            The App offers optional paid features. Purchases and subscriptions
            are processed by <strong>Apple</strong> (App Store) or{' '}
            <strong>Google</strong> (Google Play). To validate purchases and
            manage entitlements, we use <strong>RevenueCat, Inc.</strong> as our
            purchase infrastructure provider.
          </p>
          <p>
            For this purpose, RevenueCat may process a randomly generated app
            user identifier, your purchase history and subscription status, and
            limited device and country information. RevenueCat does not receive
            your neighbor data, contacts, or photos. See{' '}
            <a
              href="https://www.revenuecat.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat&apos;s Privacy Policy
            </a>
            ,{' '}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&apos;s Privacy Policy
            </a>
            , and{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>{' '}
            for details on how they handle payment data.
          </p>

          <h2>What we do not do</h2>
          <ul>
            <li>We do not sell or rent your personal information.</li>
            <li>We do not show third-party advertising.</li>
            <li>
              We do not use third-party analytics or tracking SDKs to profile
              you.
            </li>
            <li>We do not require you to create an account.</li>
          </ul>

          <h2>Children&apos;s privacy</h2>
          <p>
            The App is not directed to children under 13 (or the minimum age
            required in your jurisdiction), and we do not knowingly collect
            personal information from children.
          </p>

          <h2>Your rights and choices</h2>
          <p>
            Because your content lives on your device, you are in control of it:
          </p>
          <ul>
            <li>Delete any profile or photo at any time within the App.</li>
            <li>
              Revoke contacts, camera, photo, or notification permissions in
              your device settings.
            </li>
            <li>
              Uninstalling the App removes all data stored on the device. To
              manage purchase data held by RevenueCat or the stores, contact us
              and we will assist with a deletion request.
            </li>
          </ul>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy as the App evolves. Material changes will
            be reflected here with a new &ldquo;Last updated&rdquo; date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
