type NavLink = {
  name: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  NavLinks: NavLink[];
};

export type User = {
  image: string;
  name: string;
};

interface IArticles {
  source: { id: string | null; name: string };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}
export declare type INews = {
  status: string;
  totalResults: number;
  articles: IArticles[];
};
