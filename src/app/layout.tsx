import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { getJSONData } from "@/lib/serverUtils";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJSONData();
  const { name, title, bio } = data.personalInfo;
  return {
    title: `${name} | ${title}`,
    description: bio,
    openGraph: {
      title: `${name} | ${title}`,
      description: bio,
      type: "website",
    },
  };
}

// Applies the saved (or system) colour theme before the page paints, so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('globalTheme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
