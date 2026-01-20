interface ResourceCardContentProps {
  description: string;
  location?: string;
  createdAt?: string;
}

export const ResourceCardContent = ({ description, location, createdAt }: ResourceCardContentProps) => {
  return (
    <div className="space-y-3">
      <p className="text-gray-700 line-clamp-3">
        {description}
      </p>
      
      {(location || createdAt) && (
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {location && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {location}
            </span>
          )}
          
          {createdAt && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {createdAt}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
