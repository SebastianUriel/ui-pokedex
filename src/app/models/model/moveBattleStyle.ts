export interface MoveBattleStyle {
    id:    number;
    name:  string;
    names: {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}