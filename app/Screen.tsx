"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import AnimatedLoader from "@/components/AnimatedLoader";
import { LoaderWrapper } from "@/lib/Flaseloader";
import { useContext } from "react";
import Drawer from "@/components/Drawer";

const Screen = ({ children }: { children: React.ReactNode }) => {
  const { loader, setLoader } = useContext(LoaderWrapper);
  return (
    <>
      {loader ? (
        <>
          <Drawer NavLinks={siteConfig.NavLinks} name={siteConfig.name} />
          {children}
          <Footer />
        </>
      ) : (
        <AnimatedLoader />
      )}
    </>
  );
};
export default Screen;
