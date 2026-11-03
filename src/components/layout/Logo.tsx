import logo from "@/assets/brand/logo.webp";
import logoWhite from "@/assets/brand/logo-white.webp";

// The Ahed wordmark. Use the reverse (white) version on dark backgrounds, as the brand guidelines specify.
export function Logo({ reverse = false, height = 40 }: { reverse?: boolean; height?: number }) {
  return (
    <img
      src={reverse ? logoWhite : logo}
      alt="Ahed, always ahead"
      width={Math.round((height * 640) / 193)}
      height={height}
      className="block h-auto"
      style={{ height }}
    />
  );
}
