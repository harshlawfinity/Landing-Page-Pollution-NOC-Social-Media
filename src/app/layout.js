import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],  
  variable: "--font-poppins",
});


export const metadata = {
  icons: {
    icon: "/fav2.png",
  },
  title: "Pollution NOC | Apply Online – Lawfinity India",
  description:
    "Get your Pollution Control hassle-free with Lawfinity India. Expert support for CPCB/SPCB compliance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="../../public/fav2.png" />
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
