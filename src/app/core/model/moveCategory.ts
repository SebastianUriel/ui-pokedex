export interface MoveCategory {
    id:           number;
    name:         string;
    descriptions: {
        description: string;
        language:    {
            name: string;
            url:  string;
        };
    }[];
    moves:        {
        name: string;
        url:  string;
    }[];
}