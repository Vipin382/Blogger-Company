"use client";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="text-neutral-500 px-2 py-8 md:p-8 lg:p-16 flex flex-col gap-y-10">
        <h1 className="font-extrabold text-3xl sm:text-5xl text-neutral-300">
          About us
        </h1>
        {children}
      </div>
    </>
  );
}
