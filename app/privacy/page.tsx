import type { Metadata } from 'next'
import { Header, Footer } from '@/components/chrome'
import { APP_NAME, SUPPORT_EMAIL, LAST_UPDATED, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${APP_NAME} handles local resident data, user exports, system backups and RevenueCat purchase checks.`,
  alternates: { canonical: `${SITE_URL}/privacy/` },
  openGraph: {
    title: `Privacy Policy | ${APP_NAME}`,
    description: 'Local directory data, backups you control, and purchase-service processing explained.',
    url: `${SITE_URL}/privacy/`,
    type: 'website',
  },
}

const sections = [
  {
    "title": "Overview",
    "paragraphs": [
      "Remember the Neighbor is a private directory for remembering who lives where. No account is required. We do not operate a server that receives or synchronizes your resident profiles. The app offers local birthday reminders and an optional one-time Premium Unlock; it does not offer a subscription."
    ]
  },
  {
    "title": "Your directory, exports and device backups",
    "paragraphs": [
      "Buildings, resident names, contact details, relationships, notes, birthdays, app settings and attached photos are stored locally in the app. Importing a contact or adding a photo does not upload your directory to us or to RevenueCat.",
      "Backup & Restore creates a file containing your directory and photos. You choose where to save or share that file through your device’s sharing options. The destination may be a cloud service or another person. Your operating system may also include app files in a device backup, depending on its settings. Manage those exports and backups through the destination provider or your device settings."
    ]
  },
  {
    "title": "Device permissions and birthday reminders",
    "paragraphs": [
      "Contacts access lets you select a name and phone number to fill an editable resident profile. Camera or photo-library access lets you attach a photo when you choose. These permissions do not send your resident profiles to us.",
      "Notification permission enables local birthday reminders scheduled on the device. We do not run a remote push-notification service. You can manage these permissions in device settings."
    ]
  },
  {
    "title": "Premium purchases and RevenueCat",
    "paragraphs": [
      "Apple (App Store) or Google (Google Play) processes the purchase. RevenueCat, Inc. supplies purchase validation and Premium access checks. Its SDK communicates when the app starts and during purchase or restore flows, rather than only when you pay.",
      "RevenueCat can process a generated app-user identifier, purchase history, Premium access status and limited app/device and locale information used to operate the purchase service. The app does not send resident profiles, imported contact details or profile photos to RevenueCat.",
      "Purchase information is used to provide and restore Premium access and for purchase reporting in RevenueCat. The app has no separate product analytics or crash-reporting SDK, no advertising and no configured cross-app advertising tracking."
    ]
  },
  {
    "title": "Your choices and deletion",
    "paragraphs": [
      "You can delete directory entries in the app and manage permissions in device settings. Uninstalling removes the app’s local files, but does not delete previously exported files, system backups or store purchase records. Manage exports and backups with the destination provider or device settings.",
      "For a RevenueCat data-deletion request, contact support@trevvy.app. We may need the app’s support identifier, when available in Settings, or a relevant store transaction identifier to locate an anonymous purchase-service record. Do not send your directory, a backup archive, payment-card details or account passwords.",
      "We will explain what was located and processed, and any separate steps needed with Apple, Google or a backup provider. Deleting a RevenueCat record is not a refund or deletion of store records. Further use of the app’s purchase service may create a new service record."
    ]
  },
  {
    "title": "Children’s privacy",
    "paragraphs": [
      "The app is not directed at children under 13 or the applicable minimum age in your jurisdiction. We do not knowingly collect children’s personal information."
    ]
  },
  {
    "title": "Changes to this policy",
    "paragraphs": [
      "Changes to this policy will be posted here with an updated date. The app interface is available in English and Serbian."
    ]
  }
]

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-5 py-16">
        <article className="prose-legal">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p className="mt-3" key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <h2>Service providers</h2>
          <p>
            Read <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">RevenueCat’s Privacy Policy</a>,{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple’s Privacy Policy</a> and{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s Privacy Policy</a> for their service and store processing.
          </p>
          <h2>Contact</h2>
          <p>Questions about this policy? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  )
}
