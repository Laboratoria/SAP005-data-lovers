import data '.mock.js';
import { ordenarAaZ, buscarTipo, porNome, resultado } from '../src/data.js';

describe(porNome) = (nome) => {
        it('Esperamos que seja uma string', () => {
            expect(typeof nome).toBe('string');
        });
        it('Irá dar erro se colocar número', () => {
            expect(() => nome(28).toThrow(TypeError))
        });
        it(typeof nome === Number => {
            throw new typeError('Por favor, insira o nome do pokémon'),
        });
        it('Esperamos que retorne os pokemons com "own"', () => {
            expect(nomeFiltro("own", data.pokemon)).toStrictEqual([{
                "name": "unown",
                "type": [
                    "psychic"
                ],
                "weaknesses": [
                    "bug",
                    "ghost",
                    "dark"
                ],
            }])
        });

        it('Esperamos que retorne os pokemons com "mis"', () => {
            expect(nomeFiltro("mis", data.pokemon)).toStrictEqual([{
                "name": "misdreavus",
                "type": [
                    "ghost"
                ],
                "weaknesses": [
                    "ghost",
                    "dark"
                ],
            }])
        });

        it('Esperamos que retorne os pokemons com "ee', () => {
            expect(nomeFiltro("ee", data.pokemon)).toStrictEqual([{
                "name": "steelix",
                "type": [
                    "steel",
                    "ground"
                ],
                "weaknesses": [
                    "fire",
                    "water",
                    "fighting",
                    "ground"
                ],
            }])
        });

        describe('ordenarAaZ', () => {
            it('should be a function', () => {
                expect(typeof ordenarAaZ).toBe('function');
            });
        });

        describe('buscarTipo', () => {

            it('should be an object', () => {
                expect(typeof pokemon).toBe('function');
            });
        });
        describe('resultado', () => {

            it('should be a function', () => {
                expect(typeof resultado).toBe('function');
            });
        });