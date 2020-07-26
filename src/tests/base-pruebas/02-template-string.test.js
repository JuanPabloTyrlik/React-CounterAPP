import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('getSaludo should return Hola Juan', () => {
        const nombre = 'Juan';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });
    test('getSaludo should return Hola Carlos if no parameters are being passed', () => {
        expect(getSaludo()).toBe('Hola Carlos');
    });
});
