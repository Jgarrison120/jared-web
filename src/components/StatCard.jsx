function StatCard({ title, value, subtitle }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:-translate-y-1
      "
    >
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-sm text-cyan-400">
        {subtitle}
      </p>
    </div>
  );
}

export default StatCard;