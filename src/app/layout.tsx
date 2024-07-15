'use client'

import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";
import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [toggleCollapse, setToggleCollapse] = useState(false);

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar/>
          <Header/>
          <PageWrapper >
            {children}
          </PageWrapper>
        </div>
      </body>
    </html>
  );
}
