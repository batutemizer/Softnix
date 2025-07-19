import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center gap-3 py-4 px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#18181b]">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/sn-logo.svg" alt="SoftNix Logo" width={40} height={40} />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">SoftNix</span>
      </Link>
    </header>
  );
} 