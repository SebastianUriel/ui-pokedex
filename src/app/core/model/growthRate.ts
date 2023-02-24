export interface GrowthRate {
    id:              number;
    name:            string;
    formula:         string;
    descriptions:    {
        description: string;
        language:    {
            name: string;
            url:  string;
        };
    }[];
    levels:          {
        level:      number;
        experience: number;
    }[];
    pokemon_species: {
        name: string;
        url:  string;
    }[];
}