export interface EvolutionChain {
    id:                number;
    chain:             Chain;
}

interface Chain {
    is_baby:           boolean;
    species:           {
        name: string;
        url:  string;
    };
    evolution_details: {
        trigger:                 {
            name: string;
            url:  string;
        };
        min_level:               number;
        needs_overworld_rain:    boolean;
        time_of_day:             string;
        turn_upside_down:        boolean;
    };
    evolves_to:        Chain[];
}