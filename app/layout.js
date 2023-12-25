import "./globals.css";
import { Playpen_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecoilProvider from "./providers/recoilProvider";
import NextAuthSessionProvider from "./providers/sessionProvider.js";
const playpen_Sans = Playpen_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tony Thyme",
  description: "Recipe Blog",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0">
      <body
        className={
          playpen_Sans.className +
          " overflow-y-scroll scrollbar-hide bg-base-200 text-base-content m-0 w-100"
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
