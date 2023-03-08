export interface EncounterMethod {
    id:    number;
    name:  string;
    order: number;
    names: {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}