import { Tag } from '../atoms/Tag';

interface ResourceCardHeaderProps {
  title: string;
  category?: string;
  tags?: string[];
}

export const ResourceCardHeader = ({ title, category, tags = [] }: ResourceCardHeaderProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
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
