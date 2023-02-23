export interface ItemCategory {
    id:     number;
    name:   string;
    items:  {
        name: string;
        url:  string;
    }[];
    names:  {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    pocket: {
        name: string;
        url:  string;
    };
}