import filter from '../src/data.js';


describe('filter', () => {
    it('should be a function', () => {
        expect(typeof filter.photo).toBe('function');
    });
    it('should return in function "grass","poison" ', () => {

        expect(filter.photo()[0].type).toEqual(['grass', 'poison'])
    })
});


describe('filter', () => {
    it('should be a function', () => {
        expect(typeof filter.filter).toBe('function');
    });
    it('should return in function "abra" ', () => {

        expect(filter.filter()[0].name).toEqual('abra')
    })
});


describe('filter', () => {
    it('should be a function', () => {
        expect(typeof filter.pokedexFilter).toBe('function');
    });
    it('should return in function "bulbasaur" ', () => {

        expect(filter.pokedexFilter()[0].name).toEqual('bulbasaur')
    })
});