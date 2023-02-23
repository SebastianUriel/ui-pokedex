export interface Generation {
    id:              number;
    name:            string;
    main_region:     {
        name: string;
        url:  string;
    };
    moves:           {
        name: string;
        url:  string;
    }[];
    names: {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    pokemon_species: {
        name: string;
        url:  string;
    }[];
    types:           {
        name: string;
        url:  string;
    }[];
    version_groups:  {
        name: string;
        url:  string;
    }[];
}