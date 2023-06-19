import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Flaseloader from "@/lib/Flaseloader";
import Screen from "./Screen";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo-Company",
  description: "Demo-company",
  icons: {
    icon: "/blogging.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased bg-[#141518]")}>
        <Flaseloader>
          <Screen>{children}</Screen>
        </Flaseloader>
      </body>
    </html>
  );
}
