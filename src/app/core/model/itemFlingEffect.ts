export interface ItemFlingEffect {
    id:             number;
    name:           string;
    effect_entries: {
        effect:   string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    items:          {
        name: string;
        url:  string;
    }[];
}