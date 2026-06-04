"use client";
import { cn } from "@/lib/utils";

interface LiquidCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function LiquidCard({ className, children }: LiquidCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        className,
      )}
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.12)",
      }}
    >
      {/* liquid shimmer layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
