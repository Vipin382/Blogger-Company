import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Demo Company",
  NavLinks: [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/work", name: "Work" },
    { href: "/pricing", name: "Pricing" },
    { href: "/blog/all?type=general", name: "Blog" },
  ],
};

export declare interface IBadgesLink {
  name: string;
  value: string;
}

export const BadgesData: IBadgesLink[] = [
  {
    name: "All",
    value: "/blog/all?type=general",
  },
  {
    name: "Technology",
    value: "/blog/technology?type=technology",
  },
  {
    name: "Education",
    value: "/blog/education?type=science",
  },
  {
    name: "Lifestyle",
    value: "/blog/lifestyle?type=business",
  },
  {
    name: "Healthcare",
    value: "/blog/healthcare?type=health",
  },
  {
    name: "Sport",
    value: "/blog/sport?type=sports",
  },
  {
    name: "Entertainment",
    value: "/blog/food?type=entertainment",
  },
];
