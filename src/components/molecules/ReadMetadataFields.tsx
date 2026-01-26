import { FormField } from './FromField';
import { SelectField } from './SelectField';

interface ReadMetadataFieldsProps {
  values: {
    author: string;
    publicationDate: string;
    pageCount: string;
    format: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors?: {
    author?: string;
    publicationDate?: string;
    pageCount?: string;
    format?: string;
  };
}

export const ReadMetadataFields: React.FC<ReadMetadataFieldsProps> = ({ 
  values, 
  onChange, 
  errors 
}) => {
  const formatOptions = [
    { value: '', label: 'Sélectionner un format' },
    { value: 'Article web', label: 'Article web' },
    { value: 'Livre papier', label: 'Livre papier' },
    { value: 'Ebook', label: 'Ebook' },
    { value: 'PDF', label: 'PDF' },
    { value: 'Blog post', label: 'Blog post' },
  ];

  return (
    <div className="metadata-fields">
      <FormField
        label="Auteur·ice"
        name="readMetadata.author"
        value={values.author || ''}
        onChange={onChange}
        error={errors?.author}
      />
      
      <FormField
        label="Date de publication"
        name="readMetadata.publicationDate"
        type="date"
        value={values.publicationDate || ''}
        onChange={onChange}
      />
      
      <FormField
        label="Nombre de pages"
        name="readMetadata.pageCount"
        type="number"
        value={values.pageCount || ''}
        onChange={onChange}
      />

      <SelectField
        label="Format"
        name="readMetadata.format"
        options={formatOptions}
        value={values.format || ''}
        onChange={onChange}
        error={errors?.format}
      />
    </div>
  );
};