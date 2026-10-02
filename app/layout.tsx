import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Residencia cerca del mar en Playas de Tijuana | $439,000 USD — Granizo Properties',
  description:
    'Amplia residencia en la Sección Monumental de Playas de Tijuana. 3 recámaras, a 10 min de la frontera y a 3 cuadras del nuevo Malecón. Agenda tu cita con el asesor.',
  openGraph: {
    title: 'Residencia cerca del mar en Playas de Tijuana | $439,000 USD',
    description:
      'Amplia residencia en la Sección Monumental de Playas de Tijuana. 3 recámaras, a unos 10 min de la frontera. Agenda tu cita con el asesor.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Granizo Properties',
    images: [
      {
        url: '/images/fachada.jpg',
        width: 652,
        height: 489,
        alt: 'Fachada de la residencia en la Sección Monumental, Playas de Tijuana',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <script
          src="https://isis-vercel.vercel.app/isis-widget.js"
          data-api="https://isis-vercel.vercel.app"
          data-avatar="https://isis-vercel.vercel.app/isis-avatar.webp"
          data-brand="BienesRaícesHub"
          data-whatsapp="5216641200764"
          data-property="granizo-playas-tijuana"
          data-catalog-url="https://www.bienesraiceshub.com/isis-catalog"
          data-catalog-json="https://www.bienesraiceshub.com/isis-catalog-json"
          data-alma-url="https://preaprueba.com"
          data-emailjs-service="service_pz5aqzz"
          data-emailjs-template="template_kyt29ma"
          data-emailjs-key="wSSGo0XmY23CNICP4"
          defer
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
