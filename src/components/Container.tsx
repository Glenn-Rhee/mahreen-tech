import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Container(props: Props) {
  const { children, className } = props;
  return (
    <div className={cn("w-full py-2 md:py-4 px-4 md:px-8", className)}>
      {children}
    </div>
  );
}
