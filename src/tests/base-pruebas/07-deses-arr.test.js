import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
    test('should return an array [string, number]', () => {
        const [letras, numeros] = retornaArreglo();
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
        expect(retornaArreglo()).toEqual(['ABC', 123]);
    });
});
