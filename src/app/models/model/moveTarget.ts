export interface MoveTarget {
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
    names:        {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}