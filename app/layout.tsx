import '@styles/globals.scss';

import { Lato, Roboto_Mono } from 'next/font/google';

const lato = Lato({
  display: 'swap',
  preload: true,
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
});

const roboto_mono = Roboto_Mono({
  display: 'swap',
  preload: true,
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={`${lato.variable} ${roboto_mono.variable} font-sans`}
      lang="en"
    >
      <head>
        <base href="/" />
        <link
          href="/assets/img/favicon.png"
          rel="shortcut icon"
          type="image/png"
        />
        <meta charSet="UTF-8" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Natours | Exciting tours for adventurous people</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
