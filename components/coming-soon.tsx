'use client'

import Image from "next/image";
import { GL } from "./gl";

export function ComingSoon() {
  return (
    <div className="relative flex flex-col h-svh items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <GL hovering={false} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo-05.png"
            alt="Shieldstone Logo"
            width={300}
            height={300}
            className="h-auto w-full max-w-xs"
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
