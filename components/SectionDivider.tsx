// components/SectionDivider.tsx
type SectionDividerProps = {
  label: string;
  className?: string;
};

export function SectionDivider({ label, className = "" }: SectionDividerProps) {
  return (
    <div
      className={`flex items-center gap-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#01487E] ${className}`}
    >
      <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#01487E]/40 to-transparent" />
      <span className="rounded-full border border-[#01487E]/20 bg-white px-3 py-1 shadow-sm">
        {label}
      </span>
      <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#01487E]/40 to-transparent" />
    </div>
  );
}
