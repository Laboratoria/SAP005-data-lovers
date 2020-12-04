import { instantSearch, selectPokemonType, selectPokemonResistant, selectPokemonWeaknesses, selectPokemonGeneration, sortPokemonCp } from '../src/data.js'
import data from './mock.js';

describe('instantSearch', () => {
    it('should be an function', () => {
        expect(typeof instantSearch).toBe('function');
    });

    it('should return pokémons that starts with "cha" ', () => {
        expect(instantSearch("cha", data.pokemon)).toStrictEqual([{
            "name": "charmander",
            "generation": {
                "name": "kanto"
            },
            "type": [
                "fire"
            ],
            "stats": {
                "max-cp": "980"
            },
            "resistant": [
                "fire",
                "grass",
                "ice",
                "bug",
                "steel"
            ],
            "weaknesses": [
                "water",
                "ground",
                "rock"
            ],
        }, {
            "name": "charizard",
            "generation": {
                "name": "kanto"
            },
            "type": [
                "fire",
                "flying"
            ],
            "stats": {
                "max-cp": "2889"
            },
            "resistant": [
                "fire",
                "grass",
                "fighting",
                "bug",
                "steel"
            ],
            "weaknesses": [
                "water",
                "electric",
                "rock"
            ],
        }])
    });

    it('should return pokémons that starts with "pichu" ', () => {
        expect(instantSearch("pichu", data.pokemon)).toStrictEqual([{
            "name": "pichu",
            "generation": {
                "name": "johto"
            },
            "type": [
                "electric"
            ],
            "stats": {
                "max-cp": "473"
            },
            "resistant": [
                "electric",
                "flying",
                "steel"
            ],
            "weaknesses": [
                "ground"
            ],
        }]);
    });
    it('should return pokémons that starts with "b" ', () => {
        expect(instantSearch("b", data.pokemon)).toStrictEqual([{
            "name": "bulbasaur",
            "generation": {
                "name": "kanto"
            },
            "type": [
                "grass",
                "poison"
            ],
            "stats": {
                "max-cp": "1115"
            },
            "resistant": [
                "water",
                "electric",
                "grass",
                "fighting",
                "fairy"
            ],
            "weaknesses": [
                "fire",
                "ice",
                "flying",
                "psychic"
            ],

        }]);
    });

    describe('selectPokemonType', () => {
        it('should be an function', () => {
            expect(typeof selectPokemonType).toBe('function');
        });

        it('should return pokémons that are "electric" type ', () => {
            expect(selectPokemonType("electric", data.pokemon)).toStrictEqual([{
                    "name": "pikachu",
                    "generation": {
                        "name": "kanto"
                    },
                    "type": [
                        "electric"
                    ],
                    "stats": {
                        "max-cp": "938"
                    },
                    "resistant": [
                        "electric",
                        "flying",
                        "steel"
                    ],
                    "weaknesses": [
                        "ground"
                    ],
                },
                {
                    "name": "pichu",
                    "generation": {
                        "name": "johto"
                    },
                    "type": [
                        "electric"
                    ],
                    "stats": {
                        "max-cp": "473"
                    },
                    "resistant": [
                        "electric",
                        "flying",
                        "steel"
                    ],
                    "weaknesses": [
                        "ground"
                    ],
                }
            ]);
        });
        it('should return an empty list when select "grama"', () => {
            expect(selectPokemonType("grama", data.pokemon)).toStrictEqual([])
        });
        describe('selectPokemonResistant', () => {
            it('should be an function', () => {
                expect(typeof selectPokemonResistant).toBe('function');
            });
            // it('should throw TypeError when invoked with wrong argument types', () => {
            //     expect(() => selectPokemonResistant()).toThrow(TypeError);
            //     expect(() => selectPokemonResistant(0)).toThrow(TypeError);
            //     expect(() => selectPokemonResistant(null)).toThrow(TypeError);
            // });
            it('should return pokémons that are resistant to the "fairy" type', () => {
                expect(selectPokemonResistant("fairy", data.pokemon)).toStrictEqual([{
                    "name": "bulbasaur",
                    "generation": {
                        "name": "kanto"
                    },
                    "type": [
                        "grass",
                        "poison"
                    ],
                    "stats": {
                        "max-cp": "1115"
                    },
                    "resistant": [
                        "water",
                        "electric",
                        "grass",
                        "fighting",
                        "fairy"
                    ],
                    "weaknesses": [
                        "fire",
                        "ice",
                        "flying",
                        "psychic"
                    ],
                }])
            });
            it('should return an empty list when select  "luta"', () => {
                expect(selectPokemonResistant("luta", data.pokemon)).toStrictEqual([])
            });

            describe('selectPokemonWeaknesses', () => {
                it('should be an function', () => {
                    expect(typeof selectPokemonWeaknesses).toBe('function');
                });

                // it('should throw TypeError when invoked with wrong argument types', () => {
                //     expect(() => selectPokemonWeaknesses()).toThrow(TypeError);
                //     expect(() => selectPokemonWeaknesses(0)).toThrow(TypeError);
                //     expect(() => selectPokemonWeaknesses(null)).toThrow(TypeError);
                // });

                it('should return pokémons that are weak to the "ground" type', () => {
                    expect(selectPokemonWeaknesses("ground", data.pokemon)).toStrictEqual([{
                            "name": "charmander",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "fire"
                            ],
                            "stats": {
                                "max-cp": "980"
                            },
                            "resistant": [
                                "fire",
                                "grass",
                                "ice",
                                "bug",
                                "steel"
                            ],
                            "weaknesses": [
                                "water",
                                "ground",
                                "rock"
                            ],
                        },
                        {
                            "name": "pikachu",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "electric"
                            ],
                            "stats": {
                                "max-cp": "938"
                            },
                            "resistant": [
                                "electric",
                                "flying",
                                "steel"
                            ],
                            "weaknesses": [
                                "ground"
                            ],
                        },
                        {
                            "name": "pichu",
                            "generation": {
                                "name": "johto"
                            },
                            "type": [
                                "electric"
                            ],
                            "stats": {
                                "max-cp": "473"
                            },
                            "resistant": [
                                "electric",
                                "flying",
                                "steel"
                            ],
                            "weaknesses": [
                                "ground"
                            ],
                        }
                    ])
                });

                it('should return an empty list when select "aço"', () => {
                    expect(selectPokemonWeaknesses("aço", data.pokemon)).toStrictEqual([])
                });
            });

            describe('selectPokemonGeneration', () => {
                it('should be an function', () => {
                    expect(typeof selectPokemonGeneration).toBe('function');
                });

                // it('should throw TypeError when invoked with wrong argument types', () => {
                //     expect(() => selectPokemonGeneration()).toThrow(TypeError);
                //     expect(() => selectPokemonGeneration(0)).toThrow(TypeError);
                //     expect(() => selectPokemonGeneration(null)).toThrow(TypeError);
                // });
                it('should return pokémons that are from generation "johto"', () => {
                    expect(selectPokemonGeneration("johto", data.pokemon)).toStrictEqual([{
                            "name": "pichu",
                            "generation": {
                                "name": "johto"
                            },
                            "type": [
                                "electric"
                            ],
                            "stats": {
                                "max-cp": "473"
                            },
                            "resistant": [
                                "electric",
                                "flying",
                                "steel"
                            ],
                            "weaknesses": [
                                "ground"
                            ],
                        },
                        {
                            "name": "octillery",
                            "generation": {
                                "name": "johto"
                            },
                            "type": [
                                "water"
                            ],
                            "stats": {
                                "max-cp": "2315"
                            },
                            "resistant": [
                                "fire",
                                "water",
                                "ice",
                                "steel"
                            ],
                            "weaknesses": [
                                "electric",
                                "grass"
                            ],
                        }
                    ])
                });

                it('should return pokémons that are from generation "kanto"', () => {
                    expect(selectPokemonGeneration("kanto", data.pokemon)).toStrictEqual([{
                            "name": "bulbasaur",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "grass",
                                "poison"
                            ],
                            "stats": {
                                "max-cp": "1115"
                            },
                            "resistant": [
                                "water",
                                "electric",
                                "grass",
                                "fighting",
                                "fairy"
                            ],
                            "weaknesses": [
                                "fire",
                                "ice",
                                "flying",
                                "psychic"
                            ],
                        },
                        {
                            "name": "charmander",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "fire"
                            ],
                            "stats": {
                                "max-cp": "980"
                            },
                            "resistant": [
                                "fire",
                                "grass",
                                "ice",
                                "bug",
                                "steel"
                            ],
                            "weaknesses": [
                                "water",
                                "ground",
                                "rock"
                            ],
                        },
                        {
                            "name": "charizard",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "fire",
                                "flying"
                            ],
                            "stats": {
                                "max-cp": "2889"
                            },
                            "resistant": [
                                "fire",
                                "grass",
                                "fighting",
                                "bug",
                                "steel"
                            ],
                            "weaknesses": [
                                "water",
                                "electric",
                                "rock"
                            ],
                        },
                        {
                            "name": "pikachu",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "electric"
                            ],
                            "stats": {
                                "max-cp": "938"
                            },
                            "resistant": [
                                "electric",
                                "flying",
                                "steel"
                            ],
                            "weaknesses": [
                                "ground"
                            ],
                        }
                    ])
                });

                it('should return an empty list when select "primeira"', () => {
                    expect(selectPokemonGeneration("primeira", data.pokemon)).toStrictEqual([])
                });
            });

            describe('sortPokemonCp', () => {
                it('should be an function', () => {
                    expect(typeof sortPokemonCp).toBe('function');
                });

                // it('should throw TypeError when invoked with wrong argument types', () => {
                //     expect(() => sortPokemonCp()).toThrow(TypeError);
                //     expect(() => sortPokemonCp(0)).toThrow(TypeError);
                //     expect(() => sortPokemonCp(null)).toThrow(TypeError);
                // });

                it('should return pokémons ordered by highest to lowest cp value when select "1"', () => {
                    expect(sortPokemonCp("1", data.pokemon)).toStrictEqual([{
                            "name": "charizard",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "fire",
                                "flying"
                            ],
                            "stats": {
                                "max-cp": "2889"
                            },
                            "resistant": [
                                "fire",
                                "grass",
                                "fighting",
                                "bug",
                                "steel"
                            ],
                            "weaknesses": [
                                "water",
                                "electric",
                                "rock"
                            ],
                        },
                        {
                            "name": "octillery",
                            "generation": {
                                "name": "johto"
                            },
                            "type": [
                                "water"
                            ],
                            "stats": {
                                "max-cp": "2315"
                            },
                            "resistant": [
                                "fire",
                                "water",
                                "ice",
                                "steel"
                            ],
                            "weaknesses": [
                                "electric",
                                "grass"
                            ],
                        }, {
                            "name": "bulbasaur",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "grass",
                                "poison"
                            ],
                            "stats": {
                                "max-cp": "1115"
                            },
                            "resistant": [
                                "water",
                                "electric",
                                "grass",
                                "fighting",
                                "fairy"
                            ],
                            "weaknesses": [
                                "fire",
                                "ice",
                                "flying",
                                "psychic"
                            ],
                        }, {
                            "name": "charmander",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "fire"
                            ],
                            "stats": {
                                "max-cp": "980"
                            },
                            "resistant": [
                                "fire",
                                "grass",
                                "ice",
                                "bug",
                                "steel"
                            ],
                            "weaknesses": [
                                "water",
                                "ground",
                                "rock"
                            ],
                        }, {
                            "name": "pikachu",
                            "generation": {
                                "name": "kanto"
                            },
                            "type": [
                                "electric"
                            ],
                            "stats": {
                                "max-cp": "938"
                            },
                            "resistant": [
                                "electric",
                                "flying",
                                "steel"
                            ],
                            "weaknesses": [
                                "ground"
                            ],
                        },
                        {
                            "name": "pichu",
                            "generation": {
                                "name": "johto"
                            },
                            "type": [
                                "electric"
                            ],
                            "stats": {
                                "max-cp": "473"
                            },
                            "resistant": [
                                "electric",
                                "flying",
                                "steel"
                            ],
                            "weaknesses": [
                                "ground"
                            ],
                        }
                    ])
                });
                it('should return pokémons ordered by lowest to highest cp value when select "-1"', () => {
                    expect(sortPokemonCp("-1", data.pokemon)).toStrictEqual([{
                        "name": "pichu",
                        "generation": {
                            "name": "johto"
                        },
                        "type": [
                            "electric"
                        ],
                        "stats": {
                            "max-cp": "473"
                        },
                        "resistant": [
                            "electric",
                            "flying",
                            "steel"
                        ],
                        "weaknesses": [
                            "ground"
                        ],
                    }, {
                        "name": "pikachu",
                        "generation": {
                            "name": "kanto"
                        },
                        "type": [
                            "electric"
                        ],
                        "stats": {
                            "max-cp": "938"
                        },
                        "resistant": [
                            "electric",
                            "flying",
                            "steel"
                        ],
                        "weaknesses": [
                            "ground"
                        ],
                    }, {
                        "name": "charmander",
                        "generation": {
                            "name": "kanto"
                        },
                        "type": [
                            "fire"
                        ],
                        "stats": {
                            "max-cp": "980"
                        },
                        "resistant": [
                            "fire",
                            "grass",
                            "ice",
                            "bug",
                            "steel"
                        ],
                        "weaknesses": [
                            "water",
                            "ground",
                            "rock"
                        ],
                    }, {
                        "name": "bulbasaur",
                        "generation": {
                            "name": "kanto"
                        },
                        "type": [
                            "grass",
                            "poison"
                        ],
                        "stats": {
                            "max-cp": "1115"
                        },
                        "resistant": [
                            "water",
                            "electric",
                            "grass",
                            "fighting",
                            "fairy"
                        ],
                        "weaknesses": [
                            "fire",
                            "ice",
                            "flying",
                            "psychic"
                        ],
                    }, {
                        "name": "octillery",
                        "generation": {
                            "name": "johto"
                        },
                        "type": [
                            "water"
                        ],
                        "stats": {
                            "max-cp": "2315"
                        },
                        "resistant": [
                            "fire",
                            "water",
                            "ice",
                            "steel"
                        ],
                        "weaknesses": [
                            "electric",
                            "grass"
                        ],
                    }, {
                        "name": "charizard",
                        "generation": {
                            "name": "kanto"
                        },
                        "type": [
                            "fire",
                            "flying"
                        ],
                        "stats": {
                            "max-cp": "2889"
                        },
                        "resistant": [
                            "fire",
                            "grass",
                            "fighting",
                            "bug",
                            "steel"
                        ],
                        "weaknesses": [
                            "water",
                            "electric",
                            "rock"
                        ],
                    }])
                });
            });
        })
    })
})