import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang='cs'>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
