import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con Promesas', () => {
    test('should return a Hero Async', (done) => {
        getHeroeByIdAsync(1).then((heroe) => {
            expect(heroe).toEqual(heroes[0]);
            done();
        });
    });
    test('should return an error if id does not exist', (done) => {
        getHeroeByIdAsync(10).catch((err) => {
            expect(err).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});
