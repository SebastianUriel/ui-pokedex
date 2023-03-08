export interface PokeathlonStat {
    id:                number;
    name:              string;
    affecting_natures: {
        increase: {
            max_change: number;
            nature:     {
                name: string;
                url:  string;
            };
        }[];
        decrease: {
            max_change: number;
            nature:     {
                name: string;
                url:  string;
            };
        }[];
    };
    names:             {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}