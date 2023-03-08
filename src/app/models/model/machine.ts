export interface Machine {
    id:            number;
    item:          {
        name: string;
        url:  string;
    };
    move:          {
        name: string;
        url:  string;
    };
    version_group: {
        name: string;
        url:  string;
    };
}