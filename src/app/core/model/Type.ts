export interface Type {
    id:                    number;
    name:                  string;
    damage_relations:      {
        no_damage_to:       {
            name: string;
            url:  string;
        }[];
        half_damage_to:     {
            name: string;
            url:  string;
        }[];
        double_damage_to:   {
            name: string;
            url:  string;
        }[];
        no_damage_from:     {
            name: string;
            url:  string;
        }[];
        half_damage_from:   {
            name: string;
            url:  string;
        }[];
        double_damage_from: {
            name: string;
            url:  string;
        }[];
    };
    past_damage_relations: {
        generation:       {
            name: string;
            url:  string;
        };
        damage_relations: {
            no_damage_to:       {
                name: string;
                url:  string;
            }[];
            half_damage_to:     {
                name: string;
                url:  string;
            }[];
            double_damage_to:   {
                name: string;
                url:  string;
            }[];
            no_damage_from:     {
                name: string;
                url:  string;
            }[];
            half_damage_from:   {
                name: string;
                url:  string;
            }[];
            double_damage_from: {
                name: string;
                url:  string;
            }[];
        };
    }[];
    game_indices:          {
        game_index: number;
        generation: {
            name: string;
            url:  string;
        };
    }[];
    generation:            {
        name: string;
        url:  string;
    };
    move_damage_class:     {
        name: string;
        url:  string;
    };
    names:                 {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    pokemon:               {
        slot:    number;
        pokemon: {
            name: string;
            url:  string;
        };
    }[];
    moves:                 {
        name: string;
        url:  string;
    }[];
}