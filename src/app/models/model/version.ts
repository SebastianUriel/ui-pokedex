export interface Version {
    id:            number;
    name:          string;
    names:         {
        name:     string;
        language: {
            name: string;
            url:  string;
        }
        ;
    }[];
    version_group: {
        name: string;
        url:  string;
    };
}