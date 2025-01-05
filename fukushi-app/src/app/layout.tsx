import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'fukushi app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`w-full flex flex-col`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
