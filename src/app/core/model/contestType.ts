export interface ContestType {
    id:           number;
    name:         string;
    berry_flavor: {
        name: string;
        url:  string;
    };
    names:        {
        name:     string;
        color:    string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}
