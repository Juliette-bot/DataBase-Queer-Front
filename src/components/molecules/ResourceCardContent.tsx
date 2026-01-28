interface ResourceCardContentProps {
  description: string;
  location?: string;
  createdAt?: string;
}

export const ResourceCardContent = ({ description, location, createdAt }: ResourceCardContentProps) => {
  return (
    <div className="space-y-3">
      <p className="text-cyan-200 line-clamp-3 leading-relaxed text-sm">
        {description}
      </p>
      
      {(location || createdAt) && (
        <div className="flex items-center gap-4 text-sm">
          {location && (
            <div className="flex items-center gap-2 bg-retro-dark/50 border border-white/10 
                          rounded-pixel px-2 py-1">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" 
                   viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="square" strokeLinejoin="miter" 
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-cyan-300 font-semibold">{location}</span>
            </div>
          )}
          
          {createdAt && (
            <div className="flex items-center gap-2 bg-retro-dark/50 border border-white/10 
                          rounded-pixel px-2 py-1">
              <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" 
                   viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="square" strokeLinejoin="miter" 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-violet-300 font-semibold">{createdAt}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};