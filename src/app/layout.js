import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang='cs'>
      <body className={playFair.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
