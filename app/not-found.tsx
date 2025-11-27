// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="max-w-md text-sm text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist. It might have
        moved, or the URL might be incorrect.
      </p>
      <Link
        href="/"
        className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400"
      >
        Back to home
      </Link>
    </div>
  );
}
