'use client'

import Image from "next/image";
import Link from "next/link";
import { GL } from "./gl";

export function ComingSoon() {
  return (
    <div className="relative flex flex-col h-svh items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <GL hovering={false} />
      </div>

      {/* Header Navigation */}
      <header className="fixed z-50 top-0 left-0 w-full pt-8 md:pt-12">
        <nav className="flex justify-center items-center gap-8 md:gap-12">
          {["About", "Portfolio", "Insights", "Contact"].map((item) => (
            <Link
              key={item}
              className="uppercase font-mono text-xs md:text-sm text-foreground/70 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-12 flex justify-center">
          <Image
            src="/logo-05.png"
            alt="Shieldstone Logo"
            width={800}
            height={300}
            className="h-auto w-full max-w-2xl"
            priority
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground drop-shadow-lg">
          Coming Soon
        </h1>

        <p className="text-sm sm:text-base text-foreground/60 text-balance drop-shadow-lg">
          Something amazing is on the way. Stay tuned!
        </p>
      </div>
    </div>
  );
}
