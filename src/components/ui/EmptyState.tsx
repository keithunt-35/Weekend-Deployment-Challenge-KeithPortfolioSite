type EmptyStateProps = {
  title: string;
  body: string;
  action?: React.ReactNode;
};

export default function EmptyState({ title, body, action }: EmptyStateProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-start gap-4 border border-dashed border-line px-6 py-12 animate-rise"
    >
      <p className="font-display text-2xl font-semibold text-ink">{title}</p>
      <p className="max-w-md text-sm leading-relaxed text-mute">{body}</p>
      {action}
    </div>
  );
}
