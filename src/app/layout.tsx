export const metadata = {
  title: 'Slide & Solve',
  description: 'Slide, shift, and laugh your way through tricky puzzles. Chaos meets fun—are you ready to align the madness?',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
