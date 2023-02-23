export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    location_area_encounters: string;
    abilities: {
        is_hidden: boolean;
        slot: number;
        ability: {
            name: string;
            url: string;
        }
    }[];
    forms: {
        name: string;
        url: string;
    }[];
    game_indices: {
        game_index: number;
        version: {
            name: string;
            url: string;
        }
    }[];
    held_items: {
        item: {
            name: string;
            url: string;
        },
        version_details: {
            rarity: number;
            version: {
                name: string;
                url: string;
            }
        }[];
    }[];
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
            dream_world: {
                front_default: string;
                front_female: string;
            },
            home: {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            },
            ['official-artwork']: {
                front_default: string;
            }
        },
        versions: {
            ['generation-i']: {
                ['red-blue']: {
                    back_default: string;
                    back_gray: string;
                    front_default: string;
                    front_gray: string;
                },
                ['yellow']: {
                    back_default: string;
                    back_gray: string;
                    front_default: string;
                    front_gray: string;
                }
            },
            ['generation-ii']: {
                crystal: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                },
                gold: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                },
                silver: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                }
            },
            ['generation-iii']: {
                emerald: {
                    front_default: string;
                    front_shiny: string;
                },
                ['firered-leafgreen']: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                },
                ['ruby-sapphire']: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                }
            },
            ['generation-iv']: {
                ['diamond-pearl']: {
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                },
                ['heartgold-soulsilver']: {
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                },
                platinum: {
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                }
            },
            ['generation-v']: {
                ['black-white']: {
                    animated: {
                        back_default: string;
                        back_female: string;
                        back_shiny: string;
                        back_shiny_female: string;
                        front_default: string;
                        front_female: string;
                        front_shiny: string;
                        front_shiny_female: string;
                    }
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                }
            },
            ['generation-vi']: {
                ['omegaruby-alphasapphire']: {
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                },
                ['x-y']: {
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                }
            },
            ['generation-vii']: {
                icons: {
                    front_default: string;
                    front_female: string;
                },
                ['ultra-sun-ultra-moon']: {
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                }
            },
            ['generation-viii']: {
                icons: {
                    front_default: string;
                    front_female: string;
                }
            }
        }
    };
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        }
    }[];
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[];
    pastTypes: {
        generation : {
            name: string;
            url: string;
        };
        types: {
            slot: number;
            type: {
                name: string;
                url: string;
            }
        }[];
    }[];
}