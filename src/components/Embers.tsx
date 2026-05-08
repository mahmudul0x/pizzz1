export function Embers({ count = 24 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 37) % 100;
        const size = 2 + ((i * 13) % 6);
        const dur = 6 + ((i * 7) % 10);
        const delay = (i * 0.4) % 8;
        return (
          <span
            key={i}
            className="animate-ember absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              background: `radial-gradient(circle, var(--cheese), var(--flame) 60%, transparent 70%)`,
              animationDuration: `${dur}s`,
              animationDelay: `-${delay}s`,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </div>
  );
}
