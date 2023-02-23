export interface BerryFlavor {
    berries:      {
        berry:   {
            name: string;
            url:  string;
        };
        potency: number;
    }[];
    contest_type: {
        name: string;
        url:  string;
    };
    id:           number;
    name:         string;
    names: {
        language: {
            name: string;
            url:  string;
        };
        name:     string;
    }[];
}