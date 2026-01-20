interface TagProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const Tag = ({ label, variant = 'primary' }: TagProps) => {
  const variantStyles = {
    primary: 'bg-action/10 text-action border-action/20',
    secondary: 'bg-surface-gray text-content-secondary border-content-muted/20',
    accent: 'bg-info/10 text-info border-info/20',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-input text-sm font-medium border ${variantStyles[variant]}`}>
      {label}
    </span>
  );
};
