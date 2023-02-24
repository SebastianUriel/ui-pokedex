export interface PalParkArea {
    id:                 number;
    name:               string;
    names:              {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    pokemon_encounters: {
        base_score:      number;
        rate:            number;
        pokemon_species: {
            name: string;
            url:  string;
        };
    }[];
}