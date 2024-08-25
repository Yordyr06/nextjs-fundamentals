import { Roboto } from "next/font/google";
import { Header } from "../components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "../scss/global.scss";

const roboto = Roboto({ 
  weight: ["100", "300", "500", "700"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
