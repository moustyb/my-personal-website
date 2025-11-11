import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { cn } from "@/lib/utils"; // We will create this file
import { ThemeProvider } from "@/components/theme-provider"; // And this one

export const metadata: Metadata = {
  // Updated metadata for SEO
  title: {
    template: "%s | Mustafa's Personal Website", // Page titles will look like this
    default: "Mustafa's Personal Website", // Default title for homepage
  },
  description: "A student learning HTML, CSS, JS, and Python.",
  // Add your site's full URL once you deploy it
  // metadataBase: new URL("https://your-domain.com"), 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      {/* suppressHydrationWarning is added. 
        It's recommended when using next-themes to avoid
        warnings from class mismatches during theme switching.
      */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
