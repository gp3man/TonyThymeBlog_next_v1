import "./globals.css";
import { Playpen_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecoilProvider from "./providers/recoilProvider";
import NextAuthSessionProvider from "./providers/sessionProvider.js";
import Newsletter from "./components/form/Newsletter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getNewsletter } from "@/lib/getRecipes";
const playpen_Sans = Playpen_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tony Thyme",
  description: "Recipe Blog",
};
export const revalidate = 1800;
export default async function RootLayout({ children }) {
  const { modalCollection } = await getNewsletter();
  const NLContent = modalCollection.items[0];
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
            <Newsletter content={NLContent} />
            <Footer />
          </RecoilProvider>
        </NextAuthSessionProvider>
        <GoogleAnalytics gaId="G-WH0DGBWN2D" />
      </body>
    </html>
  );
}
