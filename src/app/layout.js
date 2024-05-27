import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang='cs'>
      <body className={lora.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
