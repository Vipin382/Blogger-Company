import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import { formatDistance, formatRelative, subDays } from "date-fns";

type Props = Partial<{
  image: string | null;
  url: string | null;
  title: string | null;
  content: string | null;
  publishedAt: string | null;
  type: string | null;
}>;
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const BlogCard = (props: Props) => {
  return (
    <Card className="min-h-[100vw] sm:min-h-[40vw] md:min-h-[454px]  bg-web-500 flex flex-col sm:flex-row md:flex-col border-neutral-600 md:min-w-[300px] w-full md:max-w-[352px] rounded-xl lg:max-h-[454px] overflow-hidden">
      <CardHeader className="p-0 sm:min-h-[40vw] md:min-h-full md:h-52 min-w-[250px] md:w-auto">
        <div className="relative overflow-hidden min-h-[50vw] sm:min-h-full w-full object-center">
          <Image
            fill
            unoptimized
            src={props.image ? props.image : "/user.jpg"}
            alt={"loading..."}
          />
        </div>
      </CardHeader>
      <CardContent className="flex p-2 flex-col gap-y-4 justify-between sm:gap-y-10 md:gap-3">
        <div className="flex  justify-between mt-2 sm:mt-8 md:mt-2">
          <p
            className={cn(
              poppins.className,
              "text-yellow-600 tracking-[5px] uppercase"
            )}
          >
            {props.type}
          </p>
          <span className="text-zinc-500 text-sm">
            {formatDistance(Date.now(), new Date(props.publishedAt as string), {
              addSuffix: true,
            })}
          </span>
        </div>
        <div className="gap-y-2">
          <h1 className="font-bold text-zinc-200 text-md sm:text-xl">
            {props.title?.substring(0, 40) + "..."}
          </h1>
          <p className="text-zinc-500 text-xs sm:text-base text-justify">
            {props.content?.substring(0, 80) + "..."}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <Link
          href={props.url as string}
          className="text-yellow-600 hover:underline text-xs sm:text-base flex gap-1"
        >
          <p>Read More</p>
          <Icons.arrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
