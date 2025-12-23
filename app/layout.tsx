import type { Metadata } from "next";
import { combo2 as combo } from "@/lib/fonts";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
   title: { default: "SchoolPlate | Partnering Communities and Donors to Fight Student Hunger", 
  template: '%s | SchoolPlate' },
  description: "Join SchoolPlate — a transparent, secure platform uniting donors, sponsors, and verified students to end hunger and promote academic success across Cameroon.",
  keywords: [
    "Hunger in Africa",
    "Hunger in Cameroon",
    "Student hunger in Cameroon",
    "Hunger on Campus",
    "Hunger in school",
    "Food aid for students",
    "Education support Cameroon",
    "CSR education support Cameroon",
    "Meal donation Africa",
    "Meal donation Cameroon"
  ],
  openGraph: {
    title: "SchoolPlate | One meal at a time for a student in class",
    description: "SchoolPlate connects compassionate donors, sponsors, and verified students to fight hunger and support education in Cameroon — a secure and transparent way to help every student succeed.",
    siteName: 'SchoolPlate',
    type:'website',
    locale:'en_CM',
    countryName:'Cameroon'  
  },

  category: 'Non-Profit'
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={
          `
          ${combo.heading.variable}  ${combo.body.variable}
          antialiased
          `}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system" 
        enableSystem
        disableTransitionOnChange>
          <div className="">
            {children}
            <div className="fixed float-right right-0 top-[93%] -translate-x-1/6">
              <ThemeSwitcher />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
