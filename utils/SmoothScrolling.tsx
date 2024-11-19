"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLenis, ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.135, duration: 0.5 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
