export interface BerryFirmness {
    berries: {
        name: string;
        url:  string;
    }[];
    id:      number;
    name:    string;
    names:   {
        language: {
            name: string;
            url:  string;
        };
        name:     string;
    }[];
}