import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

const poppins = Poppins({ subsets: ["latin"],  weight: ['300','400','500','600', '700','800','900'] });

export const metadata = {
  title: "Sh Tanmoy",
  description: `Hello this is tanmoy!  A MERN stack and Next.js developer with a passion for creating attractive landing pages, UI design, and full-stack development. I'm also skilled in graphic design and committed to continuous learning in the ever-evolving world of web development. `,
  openGraph: {
    images: `https://i.ibb.co/GpbVxnr/Screenshot-3.png`
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${process.env.NODE_ENV === 'development' ? 'debug-screens' : "" } ${poppins.className}`} >
      <Navbar/>
        {children}
        <FooterSection/>
        </body>
    </html>
  );
}
