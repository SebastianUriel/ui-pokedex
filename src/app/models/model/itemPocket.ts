export interface ItemPocket {
    id:         number;
    name:       string;
    categories: {
        name: string;
        url:  string;
    }[];
    names:      {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}