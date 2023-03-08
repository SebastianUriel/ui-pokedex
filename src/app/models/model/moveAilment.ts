export interface MoveAilment {
    id:    number;
    name:  string;
    moves: {
        name: string;
        url:  string;
    }[];
    names: {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}