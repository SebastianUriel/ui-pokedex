export interface Nature {
    id:                            number;
    name:                          string;
    decreased_stat:                {
        name: string;
        url:  string;
    };
    increased_stat:                {
        name: string;
        url:  string;
    };
    likes_flavor:                  {
        name: string;
        url:  string;
    };
    hates_flavor:                  {
        name: string;
        url:  string;
    };
    pokeathlon_stat_changes:       {
        max_change:      number;
        pokeathlon_stat: {
            name: string;
            url:  string;
        };
    }[];
    move_battle_style_preferences: {
        low_hp_preference:  number;
        high_hp_preference: number;
        move_battle_style:  {
            name: string;
            url:  string;
        };
    }[];
    names:                         {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
}