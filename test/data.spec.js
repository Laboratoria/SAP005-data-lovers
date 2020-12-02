import { example, anotherExample } from '../src/data.js';
// mocri?
const testPokemom = [{
    name: "aLUNA"
    type: [
        "Desesperada", "Feliz"
    ]
    egg: "Não por favor"
    weaknesses: ["A impostora", "Tempo", "Humor"]
} {
    name: "Mentora"
    type: [
        "Aliviada", "Esperançosa"
    ]
    egg: "Maybe"
    "weaknesses": ["Alunas", "Tempo", "mais alunas mesmo"]
}]

describe('pokemonGo', () => {

            it('should be an object', () => {
                expect(typeof pokemon).toBe('object');
            });



            describe('showingCards', () => {

                        it('should be a function', () => {
                            expect(typeof showingCards).toBe('function');
                        });
                        describe('clicado', () => {

                                it('should be a function', () => {
                                    expect(typeof clicado).toBe('function');
                                });



                                describe(nomeFiltro) = (nome) => {
                                    it('Esperamos que seja uma string', () => {
                                        expect(typeof nome).tobe('string');
                                    });
                                    it('Irá dar erro se colocar número', () => {
                                            expect(() => nome(28).toThrow(TypeError);
                                            }); it(typeof nome === Number => {
                                            throw new typeError('Por favor, insira o nome do pokémon');
                                        });
                                    }

                                    describe('anotherExample', () => {
                                        it('is a function', () => {
                                            expect(typeof anotherExample).toBe('function');
                                        });

                                        it('returns `anotherExample`', () => {
                                            expect(anotherExample()).toBe('OMG');
                                        });
                                    });



                                    // ESSE É O TESTE DE CIPHA, VEJA E TENTE RGANIZAR O SEU!QUENGA


                                    it('should throw TypeError when invoked with wrong argument types', () => {
                                        expect(() => cipher.encode()).toThrow(TypeError);
                                        expect(() => cipher.encode(0)).toThrow(TypeError);
                                        expect(() => cipher.encode(null, [])).toThrow(TypeError);
                                        expect(() => cipher.encode(0, 0)).toThrow(TypeError);
                                    });

                                    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
                                        expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
                                    })

                                });

                            describe('cipher.decode', () => {

                                it('should be a function', () => {
                                    expect(typeof cipher.decode).toBe('function');
                                });

                                it('should throw TypeError when invoked with wrong argument types', () => {
                                    expect(() => cipher.decode()).toThrow(TypeError);
                                    expect(() => cipher.decode(0)).toThrow(TypeError);
                                    expect(() => cipher.decode(null, [])).toThrow(TypeError);
                                    expect(() => cipher.decode(0, 0)).toThrow(TypeError);
                                });

                                it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
                                    expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
                                });

                            });

                        });