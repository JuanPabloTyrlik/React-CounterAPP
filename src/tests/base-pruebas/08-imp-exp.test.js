import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {
    test('should return a hero by id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find((h) => h.id === id);
        expect(heroe).toEqual(heroeData);
    });
    test('should return a undefined', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });
    test('should return an array containing DC Heroes', () => {
        expect(getHeroesByOwner('DC')).toEqual(
            heroes.filter((h) => h.owner === 'DC')
        );
    });
    test('should return an array containing Marvel Heroes', () => {
        expect(getHeroesByOwner('Marvel').length).toBe(
            heroes.filter((h) => h.owner === 'Marvel').length
        );
    });
    test('should return an empty array', () => {
        expect(getHeroesByOwner('ASD')).toEqual([]);
    });
});
