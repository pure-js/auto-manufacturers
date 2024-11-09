import Link from 'next/link';

import './App.css';

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/src/favicon.svg" rel="icon" type="image/svg+xml" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{'Auto Manufacturers'}</title>
      </head>
      <body>
        <header className="App-header">
          <h1 className="main-heading">
            <Link href="/">{'Vehicle manufacturers'}</Link>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
