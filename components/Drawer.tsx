import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { SiteConfig } from "@/types";
import { cn } from "@/lib/utils";
import { Toggle } from "./ui/toggle";
import { HambergerMenu } from "iconsax-react";
import { Icons } from "./Icons";
import { UserAvatar } from "./UserAvatar";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Drawer: React.FC<SiteConfig> = ({ name, NavLinks }) => {
  return (
    <Sheet>
      <div className="flex justify-between py-3 px-4 bg-web-500 border-b-[1px] border-neutral-700 md:px-8">
        <div className="flex gap-10 justify-between items-center">
          <div className="text-yellow-500 text-xl sm:text-3xl font-semibold">
            <Link href={"/"}>{name}</Link>
          </div>
          <nav className="sm:flex gap-4 hidden">
            {NavLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-zinc-500 hover:text-zinc-600"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex gap-2 items-center ">
          <Icons.bell
            variant={"Bold"}
            className="h-5 w-5 hidden sm:block text-zinc-500 cursor-pointer"
          />
          <Icons.settings
            variant={"Bold"}
            className="h-5 w-5 hidden sm:block text-zinc-500 cursor-pointer"
          />
          <UserAvatar user={{ image: "/user.jpg", name: "vipin" }} />
          <SheetTrigger className="hover:bg-web-500" asChild>
            <Toggle className="block text-zinc-500  sm:hidden cursor-pointer">
              <HambergerMenu />
            </Toggle>
          </SheetTrigger>
        </div>
      </div>
      <SheetContent
        className="bg-web-500 border-none"
        position="left"
        size="full"
      >
        <SheetHeader className="text-neutral-500">
          <SheetTitle
            className={`text-yellow-500 font-bold ${teko.className} tracking-widest uppercase`}
          >
            {name}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex gap-4 flex-col gap-y-8 w-full items-center justify-center h-full">
          {NavLinks.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-zinc-500 hover:text-zinc-600"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
