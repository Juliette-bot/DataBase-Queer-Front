import { FormField } from './FromField';
import { SelectField } from './SelectField';

interface PlayMetadataFieldsProps {
    values: {
        creator: string;
        gameGenre: string;
        playerNumber: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    errors?: {
        creator?: string;
        gameGenre?: string;
        playerNumber?: string;
    };
}

export const PlayMetadataFields: React.FC<PlayMetadataFieldsProps> = ({ 
    values, 
    onChange, 
    errors 
}) => {
    const genreOptions = [
        { value: '', label: 'Sélectionner un genre' },
        { value: 'RPG', label: 'RPG' },
        { value: 'Action', label: 'Action' },
        { value: 'Aventure', label: 'Aventure' },
        { value: 'Stratégie', label: 'Stratégie' },
        { value: 'Simulation', label: 'Simulation' },
        { value: 'Puzzle', label: 'Puzzle' },
        { value: 'Party Game', label: 'Party Game' },
        { value: 'Coopératif', label: 'Coopératif' },
        { value: 'Survie', label: 'Survie' },
        { value: 'MMO', label: 'MMO' },
    ];

    return (
        <div className="metadata-fields space-y-4">
            <FormField
                label="Créateur·ice / Studio"
                name="playMetadata.creator"
                value={values.creator || ''}
                onChange={onChange}
                error={errors?.creator}
            />

            <SelectField
                label="Genre de jeu"
                name="playMetadata.gameGenre"
                options={genreOptions}
                value={values.gameGenre || ''}
                onChange={onChange}
                error={errors?.gameGenre}
            />

            <FormField
                label="Nombre de joueur·euses"
                name="playMetadata.playerNumber"
                type="number"
                value={values.playerNumber || ''}
                onChange={onChange}
                error={errors?.playerNumber}
            />
        </div>
    );
};