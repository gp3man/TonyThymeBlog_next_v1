import "./globals.css";
import { Figtree } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NextAuthSessionProvider from "./providers/sessionProvider.js";
import Newsletter from "./components/form/Newsletter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getNewsletter } from "@/lib/getRecipes";
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Tony Thyme",
  description: "Recipe Blog",
};
export const revalidate = 200;
export default async function RootLayout({ children }) {
  const { modalCollection } = await getNewsletter();
  const NLContent = modalCollection.items[0];
  return (
    <html lang="en" className="m-0" style={{scrollBehavior:"smooth"}}>
      <body
        className={
          figtree.className +
          " overflow-y-scroll scrollbar-hide bg-base-200 text-base-content m-0 w-100"
        }
      >
        <NextAuthSessionProvider>
            <Header />
            {children}
            <Newsletter content={NLContent} />
            <Footer />
        </NextAuthSessionProvider>
        <GoogleAnalytics gaId="G-WH0DGBWN2D" />
      </body>
    </html>
  );
}
