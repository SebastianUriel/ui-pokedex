export interface ItemAttribute {
    id:           number;
    name:         string;
    descriptions: {
        description: string;
        language:    {
            name: string;
            url:  string;
        };
    }[];
    items:        {
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
