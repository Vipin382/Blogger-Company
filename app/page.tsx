"use client";
import { TypeAnimation } from "react-type-animation";
import { Teko } from "next/font/google";

export const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden ">
      <section className=" bg-background-image bg-center  bg-cover bg-no-repeat h-[600px]">
        <div className="flex items-end h-full">
          <div className={`px-4 md:px-8 ${teko.className}`}>
            <h1 className="text-4xl font-extrabold text-zinc-200 tracking-widest">
              Welcome to The <span className="text-red-600">Blogosphere</span>
            </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Explore, Discover, and Connect",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Unleash Your Curiosity",
                1000,
                "Inspiration at Your Fingertips",
                1000,
                "Inspiration for the inquisitive soul.",
                1000,
                "Where knowledge meets inspiration",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                fontWeight: "bolder",
                display: "inline-block",
                color: "rgb(245 158 11)",
                lineHeight: "1px",
              }}
              repeat={Infinity}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
