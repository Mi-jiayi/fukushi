import "@/app/styles/globals.css";
import Link from "next/link";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header></Header>
      <div className="inline-flex items-center space-x-4">
        <Link
          href={`/`}
          className="flex items-center space-x-4 text-black text-lg font-medium  p-2 pl-0 clear-right"
        >
          <svg
            className="text-zinc-300"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
            />
          </svg>
          一覧に戻る
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
