export interface PokemonForm {
    id:             number;
    name:           string;
    order:          number;
    form_order:     number;
    is_default:     boolean;
    is_battle_only: boolean;
    is_mega:        boolean;
    form_name:      string;
    pokemon:        {
        name: string;
        url:  string;
    };
    sprites:        {
        back_default:       string;
        back_female:        string;
        back_shiny:         string;
        back_shiny_female:  string;
        front_default:      string;
        front_female:       string;
        front_shiny:        string;
        front_shiny_female: string;
    };
    types:          {
        slot: number;
        type: {
            name: string;
            url:  string;
        };
    }[];
    version_group:  {
        name: string;
        url:  string;
    };
}