export interface ContestEffect {
    id:                  number;
    appeal:              number;
    jam:                 number;
    effect_entries:      {
        effect:   string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    flavor_text_entries: {
        flavor_text: string;
        language:    {
            name: string;
            url:  string;
        };
    }[];
}