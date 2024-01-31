import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Discover Cannabis Brands, Earn Cash Rewards for Your Honest Reviews | Moodi Day",
  description:
    "Compare reviews and ratings for the best cannabis brands near you. Share your honest reviews so no one has to have another disappointing experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header font-size />

        {children}
      </body>
    </html>
  );
}
