export interface Move {
    id:                   number;
    name:                 string;
    accuracy:             number;
    pp:                   number;
    priority:             number;
    power:                number;
    contest_combos:       {
        normal: {
            use_before: {
                name: string;
                url:  string;
            }
        };
        super:  {
            use_before: {
                name: string;
                url:  string;
            }
        };
    };
    contest_type:         {
        name: string;
        url:  string;
    };
    contest_effect:       {
        url: string;
    };
    damage_class:         {
        name: string;
        url:  string;
    };
    effect_entries:       {
        effect:       string;
        short_effect: string;
        language:     {
            name: string;
            url:  string;
        };
    }[];
    generation:           {
        name: string;
        url:  string;
    };
    meta:                 {
        ailment:        {
            name: string;
            url:  string;
        };
        category:       {
            name: string;
            url:  string;
        };
        drain:          number;
        healing:        number;
        crit_rate:      number;
        ailment_chance: number;
        flinch_chance:  number;
        stat_chance:    number;
    };
    names:                {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    super_contest_effect: {
        url: string;
    };
    target:               {
        name: string;
        url:  string;
    };
    type:                 {
        name: string;
        url:  string;
    };
    learned_by_pokemon:   {
        name: string;
        url:  string;
    }[];
    flavor_text_entries:  {
        flavor_text:   string;
        language:      {
            name: string;
            url:  string;
        };
        version_group: {
            name: string;
            url:  string;
        };
    }[];
}