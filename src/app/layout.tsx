import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; //Occasional error on this line on new projects happens because a particular version of typescript is unable to resolve CSS files due to a conflict between local configuration and a strict typescript version update. To fix it, manually create a globals.d.ts file at root level as seen in this project and make sure it's included in the "include" key in the file tsconfig.json

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { //only works in a server component.
  title: "API Demo",
  description: "Explores how to work with an api in Next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
