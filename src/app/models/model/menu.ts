export class Menu {
    data: any[];

    constructor() {
        this.data = [
            {
                "id":"home",
                "name": "Home",
                "path": "/",
                "icon": "bi bi-house",
                "sub_levels": null
            },
            {
                "id":"berries",
                "name": "Berries",
                "path": "/berries",
                "icon": "bi bi-basket",
                "sub_levels": [
                    {
                        "id":"berry-firmnesses",
                        "name": "Berry firmnesses",
                        "path": "/berry-firmnesses",
                        "icon": "bi bi-basket2-fill"
                    },
                    {
                        "id": "berry-flavors",
                        "name": "Berry flavors",
                        "path": "/berry-flavors",
                        "icon": "bi bi-basket2-fill"
                    }
                ]
            },
            {
                "id":"contests",
                "name": "Contests",
                "path": "/contests",
                "icon": "bi bi-boombox",
                "sub_levels": [
                    {
                        "id": "contest-type",
                        "name": "Contest types",
                        "path": "/contest-type",
                        "icon": "bi bi-list-columns-reverse"
                    },
                    {
                        "id": "contest-effect",
                        "name": "Contest effects",
                        "path": "/contest-effect",
                        "icon": "bi bi-clipboard2-data-fill"
                    },
                    {
                        "id": "super-contest-effect",
                        "name": "Super contest effect",
                        "path": "/super-contest-effect",
                        "icon": "bi bi-clipboard2-data-fill"
                    }
                ]
            },
            {
                "id":"encounters",
                "name": "Encounters",
                "path": "/encounters",
                "icon": "bi bi-exclamation-circle-fill",
                "sub_levels": [
                    {
                        "id": "encounter-methods",
                        "name": "Encounter methods",
                        "path": "/encounter-methods",
                        "icon": "bi bi-signpost-2"
                    },
                    {
                        "id": "encounter-conditions",
                        "name": "Encounter conditions",
                        "path": "/encounter-conditions",
                        "icon": "bi bi-check-square"
                    },
                    {
                        "id": "encounter-condition-values",
                        "name": "Encounter condition values",
                        "path": "/encounter-condition-values",
                        "icon": "bi bi-card-checklist"
                    }
                ]
            },
            {
                "id":"evolution",
                "name": "Evolution",
                "path": "/evolution",
                "icon": "bi bi-file-arrow-up",
                "sub_levels": [
                    {
                        "id": "evolution-chains",
                        "name": "Evolution chains",
                        "path": "/evolution-chains",
                        "icon": "bi bi-bar-chart-steps"
                    },
                    {
                        "id": "evolution-triggers",
                        "name": "Evolution triggers",
                        "path": "/evolution-triggers",
                        "icon": "bi bi-activity"
                    }
                ]
            },
            {
                "id":"games",
                "name": "Games",
                "path": "/games",
                "icon": "bi bi-controller",
                "sub_levels": [
                    {
                        "id": "generations",
                        "name": "Generations",
                        "path": "/generations",
                        "icon": "bi bi-arrow-bar-up"
                    },
                    {
                        "id": "pokedexes",
                        "name": "Pokedexes",
                        "path": "/pokedexes",
                        "icon": "bi bi-file-spreadsheet"
                    },
                    {
                        "id": "version",
                        "name": "Version",
                        "path": "/version",
                        "icon": "bi bi-file-diff"
                    },
                    {
                        "id": "version-groups",
                        "name": "Version groups",
                        "path": "/version-groups",
                        "icon": "bi bi-collection"
                    }
                ]
            },
            {
                "id":"items",
                "name": "Items",
                "path": "/items",
                "icon": "bi bi-capsule",
                "sub_levels": [
                    {
                        "id": "item-attributes",
                        "name": "Item attributes",
                        "path": "/item-attributes",
                        "icon": "bi bi-list-columns-reverse"
                    },
                    {
                        "id": "item-categories",
                        "name": "Item categories",
                        "path": "/item-categories",
                        "icon": "bi bi-bookmark-check"
                    },
                    {
                        "id": "item-fling-effects",
                        "name": "Item fling effects",
                        "path": "/item-fling-effects",
                        "icon": "bi bi-capsule-pill"
                    },
                    {
                        "id": "item-pockets",
                        "name": "Item pockets",
                        "path": "/item-pockets",
                        "icon": "bi bi-wallet-fill"
                    }
                ]
            },
            {
                "id":"locations",
                "name": "Locations",
                "path": "/locations",
                "icon": "bi bi-geo-alt",
                "sub_levels": [
                    {
                        "id": "location-areas",
                        "name": "Location areas",
                        "path": "/location-areas",
                        "icon": "bi bi-geo-fill"
                    },
                    {
                        "id": "pal-park-areas",
                        "name": "Pal park areas",
                        "path": "/pal-park-areas",
                        "icon": "bi bi-map"
                    },
                    {
                        "id": "regions",
                        "name": "Regions",
                        "path": "/regions",
                        "icon": "bi bi-globe-americas"
                    }
                ]
            },
            {
                "id":"machines",
                "name": "Machines",
                "path": "/machines",
                "icon": "bi bi-robot",
                "sub_levels": null
            },
            {
                "id":"moves",
                "name": "Moves",
                "path": "/moves",
                "icon": "bi bi-disc",
                "sub_levels": [
                    {
                        "id": "move-ailments",
                        "name": "Move ailments",
                        "path": "/move-ailments",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "id": "move-battle-styles",
                        "name": "Move battle styles",
                        "path": "/move-battle-styles",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "id": "move-categories",
                        "name": "Move categories",
                        "path": "/move-categories",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "id": "move-damage-classes",
                        "name": "Move damage classes",
                        "path": "/move-damage-classes",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "id": "move-learn-methods",
                        "name": "Move learn methods",
                        "path": "/move-learn-methods",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "id": "move-targets",
                        "name": "Move targets",
                        "path": "/move-targets",
                        "icon": "bi bi-disc-fill"
                    }
                ]
            },
            {
                "id":"pokemon",
                "name": "Pokemon",
                "path": "/pokemon",
                "icon": "bi bi-hdd-stack",
                "sub_levels": [
                    {
                        "id": "abilities",
                        "name": "Abilities",
                        "path": "/abilities",
                        "icon": "bi bi-ticket-detailed"
                    },
                    {
                        "id": "characteristics",
                        "name": "Characteristics",
                        "path": "/characteristics",
                        "icon": "bi bi-person-lines-fill"
                    },
                    {
                        "id": "egg-groups",
                        "name": "Egg groups",
                        "path": "/egg-groups",
                        "icon": "bi bi-egg-fill"
                    },
                    {
                        "id": "genders",
                        "name": "Genders",
                        "path": "/genders",
                        "icon": "bi bi-gender-ambiguous"
                    },
                    {
                        "id": "growth-rates",
                        "name": "Growth rates",
                        "path": "/growth-rates",
                        "icon": "bi bi-aspect-ratio"
                    },
                    {
                        "id": "natures",
                        "name": "Natures",
                        "path": "/natures",
                        "icon": "bi bi-envelope-open"
                    },
                    {
                        "id": "pokeathlon-stats",
                        "name": "Pokeathlon stats",
                        "path": "/pokeathlon-stats",
                        "icon": "bi bi-device-ssd"
                    },
                    {
                        "id": "pokemon-location-areas",
                        "name": "Pokemon location areas",
                        "path": "/pokemon-location-areas",
                        "icon": "bi bi-map"
                    },
                    {
                        "id": "pokemon-colors",
                        "name": "Pokemon colors",
                        "path": "/pokemon-colors",
                        "icon": "bi bi-palette"
                    },
                    {
                        "id": "pokemon-forms",
                        "name": "Pokemon forms",
                        "path": "/pokemon-forms",
                        "icon": "bi bi-code-square"
                    },
                    {
                        "id": "pokemon-habitats",
                        "name": "Pokemon habitats",
                        "path": "/pokemon-habitats",
                        "icon": "bi bi-back"
                    },
                    {
                        "id": "pokeathlon-shapes",
                        "name": "Pokemon shapes",
                        "path": "/pokeathlon-shapes",
                        "icon": "bi bi-diamond-half"
                    },
                    {
                        "id": "pokemon-species",
                        "name": "Pokemon species",
                        "path": "/pokemon-species",
                        "icon": "bi bi-speaker-fill"
                    },
                    {
                        "id": "stats",
                        "name": "Stats",
                        "path": "/stats",
                        "icon": "bi bi-bar-chart-line"
                    },
                    {
                        "id": "types",
                        "name": "Types",
                        "path": "/types",
                        "icon": "bi bi-diagram-2"
                    }
                ]
            }
        ];
    }

}