export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} aria-hidden />;
}

export function FormSkeleton() {
  return (
    <div role="status" aria-live="polite" aria-label="Sending your note" className="space-y-6">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">Sending your note…</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Skeleton className="h-11" />
        <Skeleton className="h-11" />
      </div>
      <Skeleton className="h-11" />
      <Skeleton className="h-40" />
      <Skeleton className="h-11 w-40" />
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="space-y-0" aria-hidden>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-4 border-b border-line py-6">
          <Skeleton className="h-5 w-8" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
}
