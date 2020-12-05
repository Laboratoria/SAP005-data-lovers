import { instantSearch, selectPokemonType, selectPokemonResistant, selectPokemonWeaknesses, selectPokemonGeneration, sortPokemonCp, getWeightPercentage } from '../src/data.js'
import data from './mock.js'

describe('instantSearch', () => {
            it('should be an function', () => {
                expect(typeof instantSearch).toBe('function');
            });

            it('should return pokémons that starts with "cha" ', () => {
                expect(instantSearch("ch", data.pokemon)).toStrictEqual([{
                        "name": "charmander",
                        "generation": {
                            "name": "kanto"
                        },
                        "size": {
                            "weight": "8.5 kg"
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
                        "size": {
                            "height": "1.70 m",
                            "weight": "90.5 kg"
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
                    }
                ])
            });

            it('should return pokémons that starts with "pichu" ', () => {
                expect(instantSearch("pichu", data.pokemon)).toStrictEqual([{
                    "name": "pichu",
                    "generation": {
                        "name": "johto"
                    },
                    "size": {
                        "height": "0.30 m",
                        "weight": "2.0 kg"
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
                    "size": {
                        "weight": "6.9 kg"
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
                                "size": {
                                    "height": "0.41 m",
                                    "weight": "6.0 kg"
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
                                "size": {
                                    "height": "0.30 m",
                                    "weight": "2.0 kg"
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

                        it('should return pokémons that are resistant to the "fairy" type', () => {
                            expect(selectPokemonResistant("fairy", data.pokemon)).toStrictEqual([{
                                "name": "bulbasaur",
                                "generation": {
                                    "name": "kanto"
                                },
                                "size": {
                                    "weight": "6.9 kg"
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

                            it('should return pokémons that are weak to the "ground" type', () => {
                                expect(selectPokemonWeaknesses("ground", data.pokemon)).toStrictEqual([{
                                        "name": "charmander",
                                        "generation": {
                                            "name": "kanto"
                                        },
                                        "size": {
                                            "weight": "8.5 kg"
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
                                        "size": {
                                            "height": "0.41 m",
                                            "weight": "6.0 kg"
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
                                        "size": {
                                            "height": "0.30 m",
                                            "weight": "2.0 kg"
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

                            it('should return pokémons that are from generation "johto"', () => {
                                expect(selectPokemonGeneration("johto", data.pokemon)).toStrictEqual([{
                                        "name": "pichu",
                                        "generation": {
                                            "name": "johto"
                                        },
                                        "size": {
                                            "height": "0.30 m",
                                            "weight": "2.0 kg"
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
                                        "size": {
                                            "height": "0.89 m",
                                            "weight": "28.5 kg"
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
                                        "size": {
                                            "weight": "6.9 kg"
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
                                        "size": {
                                            "weight": "8.5 kg"
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
                                        "size": {
                                            "height": "1.70 m",
                                            "weight": "90.5 kg"
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
                                        "size": {
                                            "height": "0.41 m",
                                            "weight": "6.0 kg"
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

                            it('should return pokémons ordered by highest to lowest cp value when select "1"', () => {
                                expect(sortPokemonCp("1", data.pokemon)).toStrictEqual([{
                                        "name": "charizard",
                                        "generation": {
                                            "name": "kanto"
                                        },
                                        "size": {
                                            "height": "1.70 m",
                                            "weight": "90.5 kg"
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
                                        "size": {
                                            "height": "0.89 m",
                                            "weight": "28.5 kg"
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
                                        "size": {
                                            "weight": "6.9 kg"
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
                                        "size": {
                                            "weight": "8.5 kg"
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
                                        "size": {
                                            "height": "0.41 m",
                                            "weight": "6.0 kg"
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
                                        "size": {
                                            "height": "0.30 m",
                                            "weight": "2.0 kg"
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
                                    "size": {
                                        "height": "0.30 m",
                                        "weight": "2.0 kg"
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
                                    "size": {
                                        "height": "0.41 m",
                                        "weight": "6.0 kg"
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
                                    "size": {
                                        "weight": "8.5 kg"
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
                                    "size": {
                                        "weight": "6.9 kg"
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
                                    "size": {
                                        "height": "0.89 m",
                                        "weight": "28.5 kg"
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
                                    "size": {
                                        "height": "1.70 m",
                                        "weight": "90.5 kg"
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
                            describe('getWeightPercentage', () => {
                                it('should be an function', () => {
                                    expect(typeof getWeightPercentage).toBe('function');
                                });

                                const pokemonTeste1 = { name: 'charmander', size: { weight: '8.5 kg' } }
                                const pokemonTeste2 = { name: 'pikachu', size: { weight: '6.0 kg' } }
                                const pokemonTeste3 = { name: 'bulbasaur', size: { weight: '6.9 kg' } }

                                it('should return "60 %" for "8.5 kg"', () => {
                                    expect(getWeightPercentage(pokemonTeste1, data.pokemon)).toBe(60)
                                });

                                it('should return "20 %" for "6.0 kg"', () => {
                                    expect(getWeightPercentage(pokemonTeste2, data.pokemon)).toBe(20)
                                });

                                it('should return "40 %" for "6.9 kg"', () => {
                                    expect(getWeightPercentage(pokemonTeste3, data.pokemon)).toBe(40)
                                });
                            })
                        })
                    })
                })
            })