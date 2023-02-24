export interface Characteristic {
    id:              number;
    gene_modulo:     number;
    possible_values: number[];
    highest_stat:    {
        name: string;
        url:  string;
    };
    descriptions:    {
        description: string;
        language:    {
            name: string;
            url:  string;
        };
    }[];
}
