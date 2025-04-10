
import Image from "next/image";
import Link from "next/link";

export function LogoToggle() {
  // const { theme } = useTheme(); // <-- Remove this

  return (
    <Link href="/" className="flex items-center" aria-label="Go to homepage"> 
      <Image
        height={100}
        width={100}
        src="/logo-light.png" 
        alt="Brand Logo Light Mode"
        className="h-10 w-auto object-cover block dark:hidden" 
        // priority // LCP 
      />
      <Image
        height={100}
        width={100}
        src="/logo-dark.png" 
        alt="Brand Logo Dark Mode"
        className="h-10 w-auto hidden object-cover dark:block" 
        // priority  //LCP
      />
    </Link>
  );
}