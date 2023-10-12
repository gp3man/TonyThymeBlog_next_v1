import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecoilProvider from "./providers/recoilProvider";
import NextAuthSessionProvider from "./providers/sessionProvider.js";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tony Thyme",
  description: "Recipe Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "overflow-y-scroll scrollbar-hide bg-base-200 text-base-content"
        }
      >
        <NextAuthSessionProvider>
          <RecoilProvider>
            <Header />
            {children}
            <Footer />
          </RecoilProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
