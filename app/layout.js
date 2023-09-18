import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "./providers/sessionProvider.js";
import RecoilProvider from "./providers/recoilProvider.js";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tony Thyme",
  description: "Recipe Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <RecoilProvider>{children}</RecoilProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
