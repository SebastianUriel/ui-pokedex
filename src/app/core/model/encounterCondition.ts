export interface EncounterCondition {
    id:     number;
    name:   string;
    values: {
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
}