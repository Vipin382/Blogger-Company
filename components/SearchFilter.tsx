import { BlogSearch } from "./BlogSearch";
import { Icons } from "./Icons";
import { Toggle } from "./ui/toggle";

export function SearchFilter() {
  return (
    <div className="w-full flex-col bg-web-500 p-2 md:p-8 space-y-6">
      <h1 className="text-2xl font-extrabold text-zinc-300">
        We tackle interesting topics every day
      </h1>
      <div className="flex justify-between flex-col gap-y-4 sm:gap-0 sm:flex-row">
        <BlogSearch />
        <div className="flex gap-2">
          <Toggle className="bg-gray-800 flex-1 sm:flex-auto hover:bg-gray-700 hover:text-gray-400 text-gray-500 data-[state=on]:bg-yellow-500">
            <Icons.Category variant="Bold" />
          </Toggle>
          <Toggle className="bg-gray-800 flex-1 sm:flex-auto hover:bg-gray-700 hover:text-gray-400 text-gray-500 data-[state=on]:bg-yellow-500">
            <Icons.Fatrows variant="Bold" />
          </Toggle>
        </div>
      </div>
    </div>
  );
}
