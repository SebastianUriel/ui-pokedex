export interface SuperContestEffect {
    id:                  number;
    appeal:              number;
    flavor_text_entries: {
        flavor_text: string;
        language:    {
            name: string;
            url:  string;
        };
    }[];
    moves: {
        name: string;
        url:  string;
    }[];
}