export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold">{title}</h2>
    {subtitle ? <p className="text-textSecondary">{subtitle}</p> : null}
  </div>
);
