import "./styles/globals.css";
import { Metadata } from "next";
import { AccountProvider } from "../context/AccountProvider";

export const metadata: Metadata = {
  title: "fukushi app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="w-full flex flex-col">
        <AccountProvider>
          <div>{children}</div>
        </AccountProvider>
      </body>
    </html>
  );
}
