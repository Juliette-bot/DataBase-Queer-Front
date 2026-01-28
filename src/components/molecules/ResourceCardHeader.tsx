import { Tag } from '../atoms/Tag';

interface ResourceCardHeaderProps {
  title: string;
  category?: string;
  tags?: string[];
}

export const ResourceCardHeader = ({ title, category, tags = [] }: ResourceCardHeaderProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-white line-clamp-2
                   [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]
                   group-hover:text-accent-neon transition-colors duration-300">
        {title}
      </h3>
      
      {(category || tags.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {category && <Tag label={category} variant="primary" />}
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} variant="secondary" />
          ))}
        </div>
      )}
    </div>
  );
};