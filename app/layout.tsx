import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import { Sacramento } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Footer from "@/components/Footer"

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gaurav Sahu",
  description: "A modern portfolio of Gaurav Sahu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={questrial.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
