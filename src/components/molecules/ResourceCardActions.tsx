import { Button } from '../atoms/Button';

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
    <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
      {onView && (
        <Button onClick={onView} variant="primary" size="sm">
          Voir plus
        </Button>
      )}
      
      {showEdit && onEdit && (
        <Button onClick={onEdit} variant="secondary" size="sm">
          Modifier
        </Button>
      )}
      
      {showDelete && onDelete && (
        <Button onClick={onDelete} variant="ghost" size="sm">
          Supprimer
        </Button>
      )}
    </div>
  );
};
