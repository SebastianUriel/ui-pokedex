export interface Item {
    id:                  number;
    name:                string;
    cost:                number;
    fling_power:         number;
    fling_effect:        {
        name: string;
        url:  string;
    };
    attributes:          {
        name: string;
        url:  string;
    }[];
    category:            {
        name: string;
        url:  string;
    };
    effect_entries:      {
        effect:       string;
        short_effect: string;
        language:     {
            name: string;
            url:  string;
        };
    }[];
    flavor_text_entries: {
        text:          string;
        version_group: {
            name: string;
            url:  string;
        };
        language:      {
            name: string;
            url:  string;
        };
    }[];
    game_indices: {
        game_index: number;
        generation: {
            name: string;
            url:  string;
        };
    }[];
    names:               {
        name:     string;
        language: {
            name: string;
            url:  string;
        };
    }[];
    sprites:             {
        default: string;
    };
    held_by_pokemon:     {
        pokemon:         {
            name: string;
            url:  string;
        };
        version_details: {
            rarity:  number;
            version: {
                name: string;
                url:  string;
            };
        }[];
    }[];
    baby_trigger_for: {
        url: string;
    };
}