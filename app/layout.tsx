import Link from 'next/link';

import './App.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Auto Manufacturers</title>
      </head>
      <body>
        <header className="App-header">
          <h1 className='main-heading'><Link href="/">Vehicle manufacturers</Link></h1>
        </header>
        { children }
      </body>
    </html>
  )
}
