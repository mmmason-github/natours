import '@styles/globals.scss';

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Template</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
