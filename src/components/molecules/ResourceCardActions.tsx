
interface ResourceCardActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  showEdit?: boolean;
  showDelete?: boolean;
}

export const ResourceCardActions = ({ 
  onView, 
  onEdit, 
  onDelete,
  showEdit = false,
  showDelete = false 
}: ResourceCardActionsProps) => {
  return (
    <div className="flex items-center gap-2 pt-4 border-t-2 border-white/10 relative">
      {/* Pixels décoratifs */}
      <div className="absolute -top-1 left-0 w-2 h-2 bg-accent-neon"></div>
      <div className="absolute -top-1 right-0 w-2 h-2 bg-cyan-400"></div>
      
      {onView && (
        <button
          onClick={onView}
          className="flex-1 px-4 py-2
                   bg-gradient-to-r from-indigo-500 to-violet-500
                   border-2 border-white/30 rounded-pixel
                   text-white font-bold text-sm
                   shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                   transition-all duration-200
                   hover:translate-x-0.5 hover:translate-y-0.5
                   active:translate-x-1 active:translate-y-1
                   active:shadow-[2px_2px_0px_rgba(0,0,0,0.3)]
                   relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-1">
            Voir plus
          </span>
          <div className="absolute inset-0 bg-white/10 translate-x-full 
                        group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
      )}
      
      {showEdit && onEdit && (
        <button
          onClick={onEdit}
          className="px-4 py-2
                   bg-retro-dark
                   border-2 border-cyan-400 rounded-pixel
                   text-cyan-300 font-bold text-sm
                   shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                   hover:border-accent-neon hover:text-accent-neon
                   transition-all duration-200
                   hover:translate-x-0.5 hover:translate-y-0.5
                   active:translate-x-1 active:translate-y-1
                   active:shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
        >
        Modifier
        </button>
      )}
      
      {showDelete && onDelete && (
        <button
          onClick={onDelete}
          className="px-4 py-2
                   bg-retro-dark
                   border-2 border-red-400/50 rounded-pixel
                   text-red-300 font-bold text-sm
                   shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                   hover:border-red-400 hover:text-red-400
                   transition-all duration-200
                   hover:translate-x-0.5 hover:translate-y-0.5
                   active:translate-x-1 active:translate-y-1
                   active:shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
        >
        Supprimer
        </button>
      )}
    </div>
  );
};