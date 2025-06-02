import Image from "next/image";
import Link from "next/link";

export function LogoToggle() {
  const brandName = "NativeMotion";

  return (
    <Link
      href="/"
      className="flex items-center group" 
      aria-label={`Go to homepage - ${brandName}`}
    >
      <div className="bg-primary-orange p-2 rounded-lg">
        {/* Light Mode Logo */}
        <Image
          height={40} 
          width={40} 
          unoptimized
          src="/logo.svg"
          alt={`${brandName} Logo Visual Light Mode`}
          className="h-8 w-auto object-contain block" 
        />
      </div>

      <span className="ml-3 font-code text-base font-semibold mr-3 text-gray-800"> 
        {brandName}
      </span>
    </Link>
  );
}