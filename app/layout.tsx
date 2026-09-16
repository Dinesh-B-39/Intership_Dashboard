import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://drmayareynolds.com'),
  title: 'Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist | Santa Monica, CA',
  description:
    'Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist in Santa Monica, CA providing therapy for adults experiencing anxiety, panic, trauma, and burnout. In-person therapy and California telehealth.',
  keywords: [
    'Dr. Maya Reynolds',
    'Licensed Clinical Psychologist',
    'Santa Monica therapy',
    'anxiety therapy',
    'trauma therapy',
    'burnout therapy',
    'California telehealth',
    'CBT therapist Santa Monica',
    'EMDR Santa Monica',
  ],
  authors: [{ name: 'Dr. Maya Reynolds, PsyD' }],
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA',
    description:
      'Therapy for high-achieving, thoughtful adults navigating anxiety, trauma, and burnout. In-person in Santa Monica and secure California telehealth.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Maya Reynolds, PsyD - Therapy in Santa Monica',
    images: [
      {
        url: '/images/office1.jpeg',
        width: 1500,
        height: 1125,
        alt: 'Dr. Maya Reynolds, PsyD Therapy Office in Santa Monica, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist',
    description:
      'Grounded, evidence-based therapy for adults navigating anxiety, trauma, and burnout. Santa Monica office & California telehealth.',
    images: ['/images/office1.jpeg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#3F574A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    name: 'Dr. Maya Reynolds, PsyD',
    description:
      'Licensed Clinical Psychologist providing therapy for adults experiencing anxiety, panic, trauma, and professional burnout. In-person in Santa Monica and California telehealth.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123th Street 45 W',
      addressLocality: 'Santa Monica',
      addressRegion: 'CA',
      postalCode: '90401',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '34.0195',
      longitude: '-118.4912',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Santa Monica',
      },
      {
        '@type': 'State',
        name: 'California',
      },
    ],
    medicalSpecialty: ['ClinicalPsychology'],
    knowsAbout: [
      'Cognitive Behavioral Therapy',
      'Eye Movement Desensitization and Reprocessing (EMDR)',
      'Trauma & Complex Trauma',
      'Anxiety & Panic',
      'Burnout & Perfectionism',
      'Mindfulness-Based Practices',
      'Body-Oriented Techniques',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FBF9F5] text-[#1A2420] antialiased selection:bg-[#E9EFEA] selection:text-[#1A2420]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
