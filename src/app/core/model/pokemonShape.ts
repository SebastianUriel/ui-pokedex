export interface PokemonShape {
    id:              number;
    name:            string;
    awesome_names:   {
        awesome_name: string;
        language:     {
            name: string;
            url:  string;
        };
    }[];
    names:           {
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
}