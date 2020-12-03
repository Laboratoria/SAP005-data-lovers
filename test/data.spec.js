import { instantSearch, selectPokemonType, selectPokemonResistant, selectPokemonWeaknesses, selectPokemonGeneration, sortPokemonCp} from '../src/data.js';

describe('instantSearch', () => {
    it('should be an function', () => {
        expect(typeof instantSearch).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => instantSearch()).toThrow(TypeError);
        expect(() => instantSearch(0)).toThrow(TypeError);
        expect(() => instantSearch(null)).toThrow(TypeError);
    });

    //it('should return "example1" for "example2"', () => {
    //    expect(instantSearch(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(instantSearch(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(instantSearch(, "example2")).toBe("example1")
    //});
});

describe('selectPokemonType', () => {
    it('should be an function', () => {
        expect(typeof instantSearch).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => selectPokemonType()).toThrow(TypeError);
        expect(() => selectPokemonType(0)).toThrow(TypeError);
        expect(() => selectPokemonType(null)).toThrow(TypeError);
    });

    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonType(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonType(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonType(, "example2")).toBe("example1")
    //});
});

describe('selectPokemonResistant', () => {
    it('should be an function', () => {
        expect(typeof instantSearch).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => selectPokemonResistant()).toThrow(TypeError);
        expect(() => selectPokemonResistant(0)).toThrow(TypeError);
        expect(() => selectPokemonResistant(null)).toThrow(TypeError);
    });

    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonResistant(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonResistant(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonResistant(, "example2")).toBe("example1")
    //});
});

describe('selectPokemonWeaknesses', () => {
    it('should be an function', () => {
        expect(typeof instantSearch).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => selectPokemonWeaknesses()).toThrow(TypeError);
        expect(() => selectPokemonWeaknesses(0)).toThrow(TypeError);
        expect(() => selectPokemonWeaknesses(null)).toThrow(TypeError);
    });

    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonWeaknesses(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonWeaknesses(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonWeaknesses(, "example2")).toBe("example1")
    //});
});

describe('selectPokemonGeneration', () => {
    it('should be an function', () => {
        expect(typeof selectPokemonGeneration).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => selectPokemonGeneration()).toThrow(TypeError);
        expect(() => selectPokemonGeneration(0)).toThrow(TypeError);
        expect(() => selectPokemonGeneration(null)).toThrow(TypeError);
    });

    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonGeneration(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonGeneration(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(selectPokemonGeneration(, "example2")).toBe("example1")
    //});
});

describe('sortPokemonCp', () => {
    it('should be an function', () => {
        expect(typeof sortPokemonCp).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => sortPokemonCp()).toThrow(TypeError);
        expect(() => sortPokemonCp(0)).toThrow(TypeError);
        expect(() => sortPokemonCp(null)).toThrow(TypeError);
    });

    //it('should return "example1" for "example2"', () => {
    //    expect(sortPokemonCp(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(sortPokemonCp(, "example2")).toBe("example1")
    //});
    //it('should return "example1" for "example2"', () => {
    //    expect(sortPokemonCp(, "example2")).toBe("example1")
    //});
});