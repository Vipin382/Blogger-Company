"use client";
import BlogCard from "@/components/BlogCard";
import { INews } from "@/types";
import { Suspense, useEffect, useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { AxiosError } from "axios";

import { getData } from "@/lib/api";

type Props = {};

const BlogFilter = async () => {
  const [data, setData] = useState<INews | null>(null);
  const params = useSearchParams().get("type");
  useEffect(() => {
    getData(params as string)
      .then((e) => setData(e))
      .catch((e: Error | AxiosError) => console.log(e));
  }, [params]);

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          <Loader2 className="mr-2 h-8 w-8 animate-spin text-web-300" />
        </div>
      }
    >
      <ScrollArea className="p-4 grid gap-2 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data ? (
          data.articles.map((items, index) => {
            return (
              <BlogCard
                key={index}
                image={items.urlToImage}
                url={items.url}
                title={items.title}
                content={items.description}
                publishedAt={items.publishedAt}
                type={params}
              />
            );
          })
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Loader2 className="mr-2 h-8 w-8 animate-spin text-web-300" />
          </div>
        )}
      </ScrollArea>
    </Suspense>
  );
};

export default BlogFilter;
