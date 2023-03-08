export interface Location {
    id:           number;
    name:         string;
    region:       {
        name: string;
        url:  string;
    };
    names:        {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    game_indices: {
        game_index: number;
        generation: {
            name: string;
            url:  string;
        };
    }[];
    areas:        {
        name: string;
        url:  string;
    }[];
}