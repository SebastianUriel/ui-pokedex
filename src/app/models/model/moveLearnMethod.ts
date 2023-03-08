export interface MoveLearnMethod {
    id:             number;
    name:           string;
    names:          {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    descriptions:   {
        description: string;
        language:    {
            name: string;
            url:  string;
        };
    }[];
    version_groups: {
        name: string;
        url:  string;
    }[];
}