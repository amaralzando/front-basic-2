import { ThemeProvider } from "@/src/components/theme-provider";
import { AuthProvider } from "@/src/contexts/AuthContext";
import { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});
export const metadata: Metadata = {
  title: "Gasa admin dashboard",
  description: "NextJs admin dashboard created by gasa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + " h-screen overflow-hidden"}>
        <ThemeProvider
          themes={["dark", "custom", "light"]}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
