import { Header } from "@/components/header";
import { Mulish } from "next/font/google";

import "./globals.css";
import { FilterContextProvider } from "@/contexts/filter-context";

const mulish  = Mulish({
    weight:['300','400','500','600'],
    subsets: ["latin"]
   });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <FilterContextProvider>
        <Header/>
        {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
