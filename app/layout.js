import '@/styles/globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'CareAI – AI-Powered Heart Health Predictions',
  description:
    'CareAI leverages AI to predict heart attack risks, empowering you to take control of your heart health.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-montserrat">
        <ClerkProvider>
          <div className="min-h-[64px]">
            <NavBar />
          </div>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
