"use client";
import { Inter } from "next/font/google";
import { SearchFilter } from "@/components/SearchFilter";
import { BadgesData } from "@/config/site";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  console.log(path);

  return (
    <>
      <SearchFilter />
      <div className="flex gap-2 p-4 flex-wrap sm:flex-none">
        {BadgesData.map((item, index) => (
          <Link key={index} href={item.value}>
            <Badge
              key={index}
              variant={"secondary"}
              className={` p-2 ${
                path === item.value.split("?")[0]
                  ? "bg-yellow-500 text-web-900 hover:bg-yellow-500/80"
                  : "bg-web-500/60 hover:bg-web-500 text-gray-300"
              }`}
            >
              {item.name}
            </Badge>
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
