export interface EncounterConditionValue {
    id:        number;
    name:      string;
    condition: {
        name: string;
        url:  string;
    };
    names:     {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}