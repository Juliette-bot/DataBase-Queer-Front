import { FormField } from './FromField';
import { SelectField } from './SelectField';

interface WatchMetadataFieldsProps {
  values: {
    creator: string;
    duration: string;
    platform: string;
    videoType: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors?: {
    creator?: string;
    duration?: string;
    platform?: string;
    videoType?: string;
  };
}

export const WatchMetadataFields: React.FC<WatchMetadataFieldsProps> = ({ 
  values, 
  onChange, 
  errors 
}) => {
  const videoTypeOptions = [
    { value: '', label: 'Sélectionner un type' },
    { value: 'Tutoriel', label: 'Tutoriel' },
    { value: 'Conférence', label: 'Conférence' },
    { value: 'Documentaire', label: 'Documentaire' },
    { value: 'Témoignage', label: 'Témoignage' },
  ];

  return (
    <div className="metadata-fields">
      <FormField
        label="Créateur·ice / Chaîne"
        name="watchMetadata.creator"
        value={values.creator || ''}
        onChange={onChange}
        error={errors?.creator}
      />
      
      <FormField
        label="Durée (en minutes)"
        name="watchMetadata.duration"
        type="number"
        value={values.duration || ''}
        onChange={onChange}
      />
      
      <FormField
        label="Plateforme"
        name="watchMetadata.platform"
        value={values.platform || ''}
        onChange={onChange}
      />

      <SelectField
        label="Type de vidéo"
        name="watchMetadata.videoType"
        options={videoTypeOptions}
        value={values.videoType || ''}
        onChange={onChange}
        error={errors?.videoType}
      />
    </div>
  );
};