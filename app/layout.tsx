import { Inter } from "next/font/google";
import { Header } from "../components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
