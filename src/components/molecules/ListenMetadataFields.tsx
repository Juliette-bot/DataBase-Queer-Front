import { FormField } from './FromField';

interface ListenMetadataFieldsProps {
  values: {
    creator: string;
    duration: string;
    platform: string;
    episodeNumber: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors?: {
    creator?: string;
    duration?: string;
    platform?: string;
    episodeNumber?: string;
  };
}

export const ListenMetadataFields: React.FC<ListenMetadataFieldsProps> = ({ 
  values, 
  onChange, 
  errors 
}) => {
  return (
    <div className="metadata-fields">
      <FormField
        label="Créateur·ice / Podcasteur·se"
        name="listenMetadata.creator"
        value={values.creator || ''}
        onChange={onChange}
        error={errors?.creator}
      />
      
      <FormField
        label="Durée (en minutes)"
        name="listenMetadata.duration"
        type="number"
        value={values.duration || ''}
        onChange={onChange}
      />
      
      <FormField
        label="Plateforme"
        name="listenMetadata.platform"
        value={values.platform || ''}
        onChange={onChange}
      />
      
      <FormField
        label="Numéro d'épisode (optionnel)"
        name="listenMetadata.episodeNumber"
        value={values.episodeNumber || ''}
        onChange={onChange}
      />
    </div>
  );
};