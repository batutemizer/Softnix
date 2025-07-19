import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/sn-logo.svg" alt="SoftNix Logo" width={40} height={40} priority />
          <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">SoftNix</span>
        </Link>
      </div>
    </header>
  );
} 