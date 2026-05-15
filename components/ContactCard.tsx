type ContactCardProps = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

export function ContactCard({ label, value, href, icon }: ContactCardProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-emerald-300/40 hover:bg-white/[0.07]">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300/10 text-xl ring-1 ring-emerald-300/30">{icon}</span>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
