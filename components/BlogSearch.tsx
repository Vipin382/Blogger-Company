import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Icons } from "./Icons";
import { Label } from "./ui/label";

interface BlogSearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function BlogSearch({ className, ...props }: BlogSearchProps) {
  return (
    <form
      className={cn(
        "relative flex focus-within:ring-zinc-600 border border-zinc-600 h-8 items-center gap-1 rounded-md px-1",
        className
      )}
      onSubmit={(e) => e.preventDefault()}
      {...props}
    >
      <Label htmlFor="search" className="cursor-pointer">
        <Icons.search className="text-zinc-500" />
      </Label>
      <Input
        type="search"
        id="search"
        placeholder="Find Courses"
        className="h-8 w-full sm:w-64 sm:pr-12 outline-none border-none text-zinc-600 placeholder:text-zinc-600"
      />

      <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex bg-zinc-700 border-zinc-700 text-zinc-500">
        <span className="text-xs">⌘</span>K
      </kbd>
    </form>
  );
}
